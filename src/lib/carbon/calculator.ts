/**
 * Carbon Emission Calculator
 *
 * Converts resource quantities to kg CO₂e using EmissionFactor records
 * stored in the database (docs/10_DATABASE_SCHEMA.md — EmissionFactor table).
 *
 * Carbon calculations must always cite source_name per:
 * docs/14_AI_COPILOT.md — "The AI Copilot cites the source_name"
 *
 * Based on: docs/07_SUSTAINABILITY_SCORE.md — Carbon Calculation
 */

import { prisma } from "@/lib/db/prisma";
import { createLogger } from "@/lib/logger";
import type { ResourceType } from "@prisma/client";

const logger = createLogger("CarbonCalculator");

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CarbonResult {
  kgCO2e: number;
  factorValue: number;
  unit: string;
  sourceName: string;
  sourceUrl: string | null;
  regionCode: string;
  effectiveYear: number;
}

// ── Lookup ────────────────────────────────────────────────────────────────────

/**
 * Get the active emission factor for a region and resource type.
 * Returns the most recent active factor, falling back to global "GLOBAL".
 */
export async function getEmissionFactor(
  regionCode: string,
  resourceType: ResourceType,
): Promise<{
  factorValue: number;
  unit: string;
  sourceName: string;
  sourceUrl: string | null;
  regionCode: string;
  effectiveYear: number;
} | null> {
  const factor = await prisma.emissionFactor.findFirst({
    where: {
      regionCode,
      resourceType,
      isActive: true,
    },
    orderBy: { effectiveYear: "desc" },
    select: {
      factorValue: true,
      unit: true,
      sourceName: true,
      sourceUrl: true,
      regionCode: true,
      effectiveYear: true,
    },
  });

  if (!factor) {
    logger.warn("No emission factor found", { regionCode, resourceType });
    return null;
  }

  return factor;
}

/**
 * Calculate CO₂e emissions for a resource quantity.
 *
 * @param quantity - The resource quantity (kWh, litres, pages, kg)
 * @param resourceType - The type of resource
 * @param regionCode - The organization's emission factor region
 * @returns Carbon result with source citation, or null if factor not found
 */
export async function calculateCarbon(
  quantity: number,
  resourceType: ResourceType,
  regionCode: string,
): Promise<CarbonResult | null> {
  const factor = await getEmissionFactor(regionCode, resourceType);

  if (!factor) return null;

  return {
    kgCO2e: quantity * factor.factorValue,
    factorValue: factor.factorValue,
    unit: factor.unit,
    sourceName: factor.sourceName,
    sourceUrl: factor.sourceUrl,
    regionCode: factor.regionCode,
    effectiveYear: factor.effectiveYear,
  };
}
