/**
 * Resource Feature — Shared Types
 *
 * Types for the unified ResourceLog feature (electricity, water, paper, waste, recycling).
 * Based on: docs/10_DATABASE_SCHEMA.md — ResourceLog model
 * Based on: docs/12_ARCHITECTURE_DECISIONS.md — ADR-016
 */

import type { ResourceType } from "@prisma/client";

export interface ResourceLogDto {
  id: string;
  organizationId: string;
  departmentId: string | null;
  resourceType: ResourceType;
  quantity: number;
  unit: string;
  cost: number | null;
  currency: string;
  period: string; // ISO date string (first day of billing period)
  notes: string | null;
  documentId: string | null;
  recordedBy: string;
  createdAt: string;
}

export interface CreateResourceLogDto {
  departmentId?: string;
  resourceType: ResourceType;
  quantity: number;
  unit: string;
  cost?: number;
  currency?: string;
  period: string;
  notes?: string;
}

export interface UpdateResourceLogDto extends Partial<CreateResourceLogDto> {
  id: string;
}

export interface ResourceSummaryDto {
  resourceType: ResourceType;
  totalQuantity: number;
  unit: string;
  totalCost: number | null;
  periodCount: number;
  latestPeriod: string | null;
}
