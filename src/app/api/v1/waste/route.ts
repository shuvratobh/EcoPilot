/**
 * GET  /api/v1/waste  — List waste logs
 * POST /api/v1/waste  — Create waste log
 */

import type { NextRequest } from "next/server";
import { ResourceType } from "@prisma/client";
import { requirePermission } from "@/lib/auth/session";
import { createdResponse, paginatedResponse, errorResponse } from "@/lib/utils/response";
import { ResourceService } from "@/features/resources/services/resource.service";
import { CreateResourceLogSchema, ResourceQuerySchema } from "@/features/resources/validation/resource.schema";

export async function GET(request: NextRequest) {
  try {
    const session = await requirePermission("read_resource");
    const { searchParams } = new URL(request.url);
    const query = ResourceQuerySchema.parse({
      resourceType: ResourceType.Waste,
      departmentId: searchParams.get("departmentId") ?? undefined,
      from: searchParams.get("from") ?? undefined,
      to: searchParams.get("to") ?? undefined,
      page: searchParams.get("page") ?? undefined,
      pageSize: searchParams.get("pageSize") ?? undefined,
    });
    const { data, total } = await ResourceService.list(session.organizationId, query);
    return paginatedResponse(data, total, query.page, query.pageSize);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requirePermission("create_resource");
    const body = await request.json() as Record<string, unknown>;
    const input = CreateResourceLogSchema.parse({ ...body, resourceType: ResourceType.Waste });
    const log = await ResourceService.create(session.organizationId, session.supabaseId, input);
    return createdResponse(log);
  } catch (error) {
    return errorResponse(error);
  }
}
