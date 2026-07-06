/**
 * Resource Service
 *
 * Contains ALL business logic for resource log management.
 * The shared service used by all 5 resource endpoints:
 *   /electricity, /water, /paper, /waste, /recycling
 *
 * Based on: docs/01_MASTER_RULES.md — Business Logic belongs in Services
 * Based on: docs/12_ARCHITECTURE_DECISIONS.md — ADR-016 Unified ResourceLog
 */

import { ResourceRepository } from "../repositories/resource.repository";
import { createLogger } from "@/lib/logger";
import { NotFoundError, MultiTenancyError } from "@/lib/errors";
import type { CreateResourceLogInput, ResourceQueryInput } from "../validation/resource.schema";
import type { ResourceType } from "@prisma/client";

const logger = createLogger("ResourceService");

export const ResourceService = {
  /**
   * List resource logs for an organization.
   */
  async list(organizationId: string, params: ResourceQueryInput) {
    logger.info("Listing resource logs", { organizationId, resourceType: params.resourceType });

    const result = await ResourceRepository.findMany({
      organizationId,
      resourceType: params.resourceType,
      departmentId: params.departmentId,
      from: params.from ? new Date(params.from) : undefined,
      to: params.to ? new Date(params.to) : undefined,
      page: params.page,
      pageSize: params.pageSize,
    });

    return result;
  },

  /**
   * Get a single resource log.
   */
  async getById(id: string, organizationId: string) {
    const log = await ResourceRepository.findById(id, organizationId);

    if (!log) {
      throw new NotFoundError("ResourceLog");
    }

    // Double-check org ownership (defense in depth)
    if (log.organizationId !== organizationId) {
      throw new MultiTenancyError();
    }

    return log;
  },

  /**
   * Create a new resource log entry.
   */
  async create(
    organizationId: string,
    recordedBy: string,
    input: CreateResourceLogInput,
  ) {
    logger.info("Creating resource log", {
      organizationId,
      resourceType: input.resourceType,
    });

    const log = await ResourceRepository.create({
      organization: { connect: { id: organizationId } },
      ...(input.departmentId && {
        department: { connect: { id: input.departmentId } },
      }),
      resourceType: input.resourceType,
      quantity: input.quantity,
      unit: input.unit,
      cost: input.cost ?? null,
      currency: input.currency ?? "BDT",
      period: new Date(input.period),
      notes: input.notes ?? null,
      recordedBy,
    });

    return log;
  },

  /**
   * Soft-delete a resource log.
   */
  async delete(id: string, organizationId: string) {
    // Verify ownership first
    await this.getById(id, organizationId);

    logger.info("Deleting resource log", { id, organizationId });

    await ResourceRepository.softDelete(id, organizationId);
  },

  /**
   * Aggregate consumption for a resource type over a date range.
   */
  async aggregate(
    organizationId: string,
    resourceType: ResourceType,
    from: Date,
    to: Date,
    departmentId?: string,
  ) {
    return ResourceRepository.aggregate(
      organizationId,
      resourceType,
      from,
      to,
      departmentId,
    );
  },
};
