/**
 * Resource Feature — Zod Validation Schemas
 *
 * Based on: docs/01_MASTER_RULES.md — Always validate with Zod
 * Based on: docs/10_DATABASE_SCHEMA.md — ResourceLog model
 */

import { z } from "zod";
import { ResourceType } from "@prisma/client";

export const CreateResourceLogSchema = z.object({
  departmentId: z.string().cuid().optional(),
  resourceType: z.nativeEnum(ResourceType, {
    errorMap: () => ({ message: "Invalid resource type" }),
  }),
  quantity: z.number().positive("Quantity must be a positive number"),
  unit: z.string().min(1, "Unit is required").max(20),
  cost: z.number().nonnegative().optional(),
  currency: z.string().length(3).default("BDT"),
  period: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Period must be in YYYY-MM-DD format"),
  notes: z.string().max(500).optional(),
});

export const UpdateResourceLogSchema = CreateResourceLogSchema.partial().extend({
  id: z.string().cuid(),
});

export const ResourceQuerySchema = z.object({
  resourceType: z.nativeEnum(ResourceType).optional(),
  departmentId: z.string().cuid().optional(),
  from: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  to: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export type CreateResourceLogInput = z.infer<typeof CreateResourceLogSchema>;
export type UpdateResourceLogInput = z.infer<typeof UpdateResourceLogSchema>;
export type ResourceQueryInput = z.infer<typeof ResourceQuerySchema>;
