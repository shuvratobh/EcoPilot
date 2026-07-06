/**
 * Resource Repository
 *
 * ONLY communicates with Prisma. Contains NO business logic.
 * Scopes every query by organizationId for multi-tenancy.
 *
 * Based on: docs/01_MASTER_RULES.md — Repository Rules
 * Based on: docs/12_ARCHITECTURE_DECISIONS.md — ADR-016
 */

import { prisma } from "@/lib/db/prisma";
import type { ResourceType, Prisma } from "@prisma/client";
import { APP_CONFIG } from "@/config/app.config";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FindResourceLogsParams {
  organizationId: string;
  resourceType?: ResourceType;
  departmentId?: string;
  from?: Date;
  to?: Date;
  page?: number;
  pageSize?: number;
}

// ── Repository ────────────────────────────────────────────────────────────────

export const ResourceRepository = {
  /**
   * Find all resource logs for an organization, with optional filters.
   */
  async findMany(params: FindResourceLogsParams) {
    const {
      organizationId,
      resourceType,
      departmentId,
      from,
      to,
      page = 1,
      pageSize = APP_CONFIG.pagination.defaultPageSize,
    } = params;

    const where: Prisma.ResourceLogWhereInput = {
      organizationId,
      deletedAt: null,
      ...(resourceType && { resourceType }),
      ...(departmentId && { departmentId }),
      ...(from || to
        ? {
            period: {
              ...(from && { gte: from }),
              ...(to && { lte: to }),
            },
          }
        : {}),
    };

    const [data, total] = await prisma.$transaction([
      prisma.resourceLog.findMany({
        where,
        orderBy: { period: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.resourceLog.count({ where }),
    ]);

    return { data, total };
  },

  /**
   * Find a single resource log by ID, scoped to the organization.
   */
  async findById(id: string, organizationId: string) {
    return prisma.resourceLog.findFirst({
      where: { id, organizationId, deletedAt: null },
    });
  },

  /**
   * Create a new resource log.
   */
  async create(data: Prisma.ResourceLogCreateInput) {
    return prisma.resourceLog.create({ data });
  },

  /**
   * Update an existing resource log, scoped to the organization.
   */
  async update(
    id: string,
    organizationId: string,
    data: Prisma.ResourceLogUpdateInput,
  ) {
    return prisma.resourceLog.updateMany({
      where: { id, organizationId, deletedAt: null },
      data,
    });
  },

  /**
   * Soft-delete a resource log.
   */
  async softDelete(id: string, organizationId: string) {
    return prisma.resourceLog.updateMany({
      where: { id, organizationId, deletedAt: null },
      data: { deletedAt: new Date() },
    });
  },

  /**
   * Aggregate total consumption by resource type for a period.
   */
  async aggregate(
    organizationId: string,
    resourceType: ResourceType,
    from: Date,
    to: Date,
    departmentId?: string,
  ) {
    return prisma.resourceLog.aggregate({
      where: {
        organizationId,
        resourceType,
        departmentId: departmentId ?? undefined,
        deletedAt: null,
        period: { gte: from, lte: to },
      },
      _sum: { quantity: true, cost: true },
      _count: true,
    });
  },
};
