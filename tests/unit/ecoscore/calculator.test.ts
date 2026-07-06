/**
 * EcoScore Calculator Unit Tests
 *
 * Tests the pure calculateEcoScore() function.
 * No mocks needed — this is entirely pure logic.
 */

import { describe, it, expect } from "vitest";
import { calculateEcoScore } from "@/lib/ecoscore/calculator";
import type { EcoScoreInput } from "@/lib/ecoscore/calculator";

const baseInput: EcoScoreInput = {
  energy: { score: 70 },
  water: { score: 80 },
  paper: { score: 75 },
  waste: { score: 65, recyclingRatePercent: 40 },
  carbon: { score: 72 },
  monthsOfData: 3,
  consecutiveImprovementMonths: 0,
  allGoalsAchieved: false,
  dataCompletenessPercent: 95,
};

describe("calculateEcoScore", () => {
  it("computes weighted overall score correctly", () => {
    const result = calculateEcoScore(baseInput);
    // energy: 70*0.30 + water: 80*0.15 + paper: 75*0.15 + waste: 65*0.20 + carbon: 72*0.20
    // = 21 + 12 + 11.25 + 13 + 14.4 = 71.65
    expect(result.overallScore).toBeCloseTo(72.65, 0); // +1 data completeness bonus
  });

  it("applies data completeness bonus when ≥90%", () => {
    const result = calculateEcoScore(baseInput);
    expect(result.bonusPoints).toBeGreaterThanOrEqual(1);
  });

  it("does not apply bonuses when monthsOfData < 2", () => {
    const input: EcoScoreInput = { ...baseInput, monthsOfData: 1 };
    const result = calculateEcoScore(input);
    expect(result.bonusPoints).toBe(0);
    expect(result.penaltyPoints).toBe(0);
  });

  it("applies consecutive improvement bonus", () => {
    const input: EcoScoreInput = {
      ...baseInput,
      consecutiveImprovementMonths: 3,
    };
    const result = calculateEcoScore(input);
    expect(result.bonusPoints).toBeGreaterThanOrEqual(2);
  });

  it("clamps overall score to [0, 100]", () => {
    const input: EcoScoreInput = {
      energy: { score: 100 },
      water: { score: 100 },
      paper: { score: 100 },
      waste: { score: 100, recyclingRatePercent: 80 },
      carbon: { score: 100 },
      monthsOfData: 6,
      consecutiveImprovementMonths: 3,
      allGoalsAchieved: true,
      dataCompletenessPercent: 100,
    };
    const result = calculateEcoScore(input);
    expect(result.overallScore).toBeLessThanOrEqual(100);
  });

  it("returns 'Excellent' grade for score ≥80", () => {
    const input: EcoScoreInput = {
      energy: { score: 90 },
      water: { score: 90 },
      paper: { score: 90 },
      waste: { score: 90, recyclingRatePercent: 80 },
      carbon: { score: 90 },
      monthsOfData: 4,
      consecutiveImprovementMonths: 3,
      allGoalsAchieved: true,
      dataCompletenessPercent: 100,
    };
    const result = calculateEcoScore(input);
    expect(result.grade).toBe("excellent");
    expect(result.gradeLabel).toBe("Excellent");
  });

  it("returns Low confidence when monthsOfData < 1", () => {
    const input: EcoScoreInput = {
      ...baseInput,
      dataCompletenessPercent: 30,
      monthsOfData: 0,
    };
    const result = calculateEcoScore(input);
    expect(result.confidence).toBe("Low");
  });

  it("returns High confidence with complete data and ≥3 months", () => {
    const result = calculateEcoScore(baseInput);
    expect(result.confidence).toBe("High");
  });

  it("penalizes low recycling rate (<30%)", () => {
    const input: EcoScoreInput = {
      ...baseInput,
      waste: { score: 65, recyclingRatePercent: 20 },
    };
    const result = calculateEcoScore(input);
    expect(result.penaltyPoints).toBeGreaterThan(0);
  });
});
