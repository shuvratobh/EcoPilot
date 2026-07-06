/**
 * Application-Wide Constants
 *
 * Single source of truth for magic values used throughout the codebase.
 * Import from here — never hardcode these values inline.
 *
 * Based on: docs/07_SUSTAINABILITY_SCORE.md, docs/10_DATABASE_SCHEMA.md
 */

import { ResourceType } from "@prisma/client";

// ── EcoScore Weights (from docs/07_SUSTAINABILITY_SCORE.md) ──────────────────

export const ECOSCORE_WEIGHTS = {
  energy: 0.30,
  water: 0.15,
  paper: 0.15,
  waste: 0.20,
  carbon: 0.20,
} as const;

// ── EcoScore Numeric Thresholds (from docs/07_SUSTAINABILITY_SCORE.md v1.1) ──

export const ECOSCORE_PENALTY_THRESHOLDS = {
  [ResourceType.Electricity]: {
    increasePercent: 15,  // > 15% MoM increase triggers penalty
    penaltyPoints: 3,
  },
  [ResourceType.Water]: {
    increasePercent: 20,
    penaltyPoints: 2,
  },
  [ResourceType.Paper]: {
    increasePercent: 25,
    penaltyPoints: 2,
  },
  [ResourceType.Waste]: {
    recyclingRateMinPercent: 30, // Below 30% triggers penalty
    penaltyPoints: 3,
  },
  [ResourceType.Recycling]: {
    increasePercent: 15, // CO₂ increase
    penaltyPoints: 2,
  },
} as const;

export const ECOSCORE_BONUS = {
  consecutiveImprovementMonths: 3,
  consecutiveImprovementPoints: 2,
  allGoalsAchievedPoints: 1,
  dataCompletenessMinPercent: 90,
  dataCompletenessPoints: 1,
  recyclingRateExcellentPercent: 70,
  recyclingRateExcellentPoints: 1,
  maxBonusPoints: 5,
} as const;

export const ECOSCORE_SEASONAL_VARIANCE_PERCENT = 5;

// ── EcoScore Grade Thresholds ─────────────────────────────────────────────────

export const ECOSCORE_GRADES = {
  excellent: { min: 80, label: "Excellent", color: "ecoscore-excellent" },
  good: { min: 65, label: "Good", color: "ecoscore-good" },
  average: { min: 50, label: "Average", color: "ecoscore-average" },
  poor: { min: 35, label: "Poor", color: "ecoscore-poor" },
  critical: { min: 0, label: "Critical", color: "ecoscore-critical" },
} as const;

// ── Resource Type Labels ──────────────────────────────────────────────────────

export const RESOURCE_TYPE_LABELS: Record<ResourceType, string> = {
  [ResourceType.Electricity]: "Electricity",
  [ResourceType.Water]: "Water",
  [ResourceType.Paper]: "Paper",
  [ResourceType.Waste]: "Waste",
  [ResourceType.Recycling]: "Recycling",
};

export const RESOURCE_TYPE_UNITS: Record<ResourceType, string> = {
  [ResourceType.Electricity]: "kWh",
  [ResourceType.Water]: "litres",
  [ResourceType.Paper]: "pages",
  [ResourceType.Waste]: "kg",
  [ResourceType.Recycling]: "kg",
};

export const RESOURCE_TYPE_ICONS: Record<ResourceType, string> = {
  [ResourceType.Electricity]: "Zap",
  [ResourceType.Water]: "Droplets",
  [ResourceType.Paper]: "FileText",
  [ResourceType.Waste]: "Trash2",
  [ResourceType.Recycling]: "Recycle",
};

// ── Currency ──────────────────────────────────────────────────────────────────

export const DEFAULT_CURRENCY = "BDT";
export const DEFAULT_CURRENCY_SYMBOL = "৳";
export const DEFAULT_REGION = "BD";

// ── Minimum Data Requirements ─────────────────────────────────────────────────

export const MIN_MONTHS_FOR_TREND = 2;
export const MIN_MONTHS_FOR_FORECAST = 3;
