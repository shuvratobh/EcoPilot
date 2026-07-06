/**
 * EcoScore Calculator
 *
 * Pure functions for EcoScore calculation.
 * No database calls — all DB queries happen in ecoscore.service.ts.
 * This file is 100% unit-testable.
 *
 * Based on: docs/07_SUSTAINABILITY_SCORE.md (v1.1)
 * Formula: (Energy×0.30) + (Water×0.15) + (Paper×0.15) + (Waste×0.20) + (Carbon×0.20) + Bonus − Penalties
 */

import {
  ECOSCORE_WEIGHTS,
  ECOSCORE_PENALTY_THRESHOLDS,
  ECOSCORE_BONUS,
  ECOSCORE_GRADES,
  ECOSCORE_SEASONAL_VARIANCE_PERCENT,
  MIN_MONTHS_FOR_TREND,
} from "@/constants";
import { ResourceType } from "@prisma/client";

// ── Input Types ───────────────────────────────────────────────────────────────

export interface PillarInput {
  /** Normalized pillar score (0–100) */
  score: number;
  /** Previous period value for trend comparison */
  previousValue?: number;
  /** Current period value */
  currentValue?: number;
}

export interface EcoScoreInput {
  energy: PillarInput;
  water: PillarInput;
  paper: PillarInput;
  waste: PillarInput & {
    recyclingRatePercent?: number;
  };
  carbon: PillarInput;
  /** Number of months of data available */
  monthsOfData: number;
  /** Number of consecutive months with improvement */
  consecutiveImprovementMonths: number;
  /** Whether all active goals were achieved this period */
  allGoalsAchieved: boolean;
  /** Data completeness 0–100 */
  dataCompletenessPercent: number;
}

// ── Output Types ──────────────────────────────────────────────────────────────

export interface EcoScoreResult {
  overallScore: number;
  pillarScores: {
    energy: number;
    water: number;
    paper: number;
    waste: number;
    carbon: number;
  };
  bonusPoints: number;
  penaltyPoints: number;
  grade: string;
  gradeLabel: string;
  confidence: "High" | "Medium" | "Low";
  dataCompletenessPercent: number;
}

// ── Penalty Calculation ───────────────────────────────────────────────────────

function calculatePenalties(input: EcoScoreInput): number {
  let penalties = 0;

  // Skip penalties if insufficient data for trend
  if (input.monthsOfData < MIN_MONTHS_FOR_TREND) return 0;

  // Electricity penalty
  const elecThreshold = ECOSCORE_PENALTY_THRESHOLDS[ResourceType.Electricity];
  if (
    input.energy.previousValue !== undefined &&
    input.energy.currentValue !== undefined &&
    input.energy.previousValue > 0
  ) {
    const increasePercent =
      ((input.energy.currentValue - input.energy.previousValue) / input.energy.previousValue) * 100;
    if (increasePercent > elecThreshold.increasePercent + ECOSCORE_SEASONAL_VARIANCE_PERCENT) {
      penalties += elecThreshold.penaltyPoints;
    }
  }

  // Water penalty
  const waterThreshold = ECOSCORE_PENALTY_THRESHOLDS[ResourceType.Water];
  if (
    input.water.previousValue !== undefined &&
    input.water.currentValue !== undefined &&
    input.water.previousValue > 0
  ) {
    const increasePercent =
      ((input.water.currentValue - input.water.previousValue) / input.water.previousValue) * 100;
    if (increasePercent > waterThreshold.increasePercent + ECOSCORE_SEASONAL_VARIANCE_PERCENT) {
      penalties += waterThreshold.penaltyPoints;
    }
  }

  // Paper penalty
  const paperThreshold = ECOSCORE_PENALTY_THRESHOLDS[ResourceType.Paper];
  if (
    input.paper.previousValue !== undefined &&
    input.paper.currentValue !== undefined &&
    input.paper.previousValue > 0
  ) {
    const increasePercent =
      ((input.paper.currentValue - input.paper.previousValue) / input.paper.previousValue) * 100;
    if (increasePercent > paperThreshold.increasePercent + ECOSCORE_SEASONAL_VARIANCE_PERCENT) {
      penalties += paperThreshold.penaltyPoints;
    }
  }

  // Recycling rate penalty
  const wasteThreshold = ECOSCORE_PENALTY_THRESHOLDS[ResourceType.Waste];
  if (
    input.waste.recyclingRatePercent !== undefined &&
    input.waste.recyclingRatePercent < wasteThreshold.recyclingRateMinPercent
  ) {
    penalties += wasteThreshold.penaltyPoints;
  }

  return Math.min(penalties, 15); // Cap total penalties
}

// ── Bonus Calculation ─────────────────────────────────────────────────────────

function calculateBonus(input: EcoScoreInput): number {
  // Skip bonuses if insufficient data
  if (input.monthsOfData < MIN_MONTHS_FOR_TREND) return 0;

  let bonus = 0;

  if (input.consecutiveImprovementMonths >= ECOSCORE_BONUS.consecutiveImprovementMonths) {
    bonus += ECOSCORE_BONUS.consecutiveImprovementPoints;
  }
  if (input.allGoalsAchieved) {
    bonus += ECOSCORE_BONUS.allGoalsAchievedPoints;
  }
  if (input.dataCompletenessPercent >= ECOSCORE_BONUS.dataCompletenessMinPercent) {
    bonus += ECOSCORE_BONUS.dataCompletenessPoints;
  }
  if (
    input.waste.recyclingRatePercent !== undefined &&
    input.waste.recyclingRatePercent >= ECOSCORE_BONUS.recyclingRateExcellentPercent
  ) {
    bonus += ECOSCORE_BONUS.recyclingRateExcellentPoints;
  }

  return Math.min(bonus, ECOSCORE_BONUS.maxBonusPoints);
}

// ── Grade Determination ───────────────────────────────────────────────────────

function getGrade(score: number): { grade: string; gradeLabel: string } {
  for (const [grade, config] of Object.entries(ECOSCORE_GRADES)) {
    if (score >= config.min) {
      return { grade, gradeLabel: config.label };
    }
  }
  return { grade: "critical", gradeLabel: "Critical" };
}

// ── Confidence Determination ──────────────────────────────────────────────────

function getConfidence(
  dataCompletenessPercent: number,
  monthsOfData: number,
): "High" | "Medium" | "Low" {
  if (dataCompletenessPercent >= 90 && monthsOfData >= 3) return "High";
  if (dataCompletenessPercent >= 60 && monthsOfData >= 1) return "Medium";
  return "Low";
}

// ── Main Calculator ───────────────────────────────────────────────────────────

/**
 * Calculate the EcoScore from pillar inputs.
 *
 * Pure function — no side effects, no DB calls.
 * Call this from ecoscore.service.ts after fetching all required data.
 */
export function calculateEcoScore(input: EcoScoreInput): EcoScoreResult {
  const { energy, water, paper, waste, carbon } = input;

  // Weighted pillar scores
  const weightedEnergy = energy.score * ECOSCORE_WEIGHTS.energy;
  const weightedWater = water.score * ECOSCORE_WEIGHTS.water;
  const weightedPaper = paper.score * ECOSCORE_WEIGHTS.paper;
  const weightedWaste = waste.score * ECOSCORE_WEIGHTS.waste;
  const weightedCarbon = carbon.score * ECOSCORE_WEIGHTS.carbon;

  const baseScore = weightedEnergy + weightedWater + weightedPaper + weightedWaste + weightedCarbon;

  const bonusPoints = calculateBonus(input);
  const penaltyPoints = calculatePenalties(input);

  const rawScore = baseScore + bonusPoints - penaltyPoints;
  const overallScore = Math.max(0, Math.min(100, rawScore));

  const { grade, gradeLabel } = getGrade(overallScore);
  const confidence = getConfidence(input.dataCompletenessPercent, input.monthsOfData);

  return {
    overallScore: Math.round(overallScore * 10) / 10,
    pillarScores: {
      energy: Math.round(energy.score * 10) / 10,
      water: Math.round(water.score * 10) / 10,
      paper: Math.round(paper.score * 10) / 10,
      waste: Math.round(waste.score * 10) / 10,
      carbon: Math.round(carbon.score * 10) / 10,
    },
    bonusPoints,
    penaltyPoints,
    grade,
    gradeLabel,
    confidence,
    dataCompletenessPercent: input.dataCompletenessPercent,
  };
}
