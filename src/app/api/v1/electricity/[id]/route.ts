/**
 * GET    /api/v1/electricity/[id]  — Get single log
 * DELETE /api/v1/electricity/[id]  — Soft-delete log
 */

import type { NextRequest } from "next/server";
import { requirePermission } from "@/lib/auth/session";
import { successResponse, noContentResponse, errorResponse } from "@/lib/utils/response";
import { ResourceService } from "@/features/resources/services/resource.service";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requirePermission("read_resource");
    const { id } = await params;
    const log = await ResourceService.getById(id, session.organizationId);
    return successResponse(log);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requirePermission("delete_resource");
    const { id } = await params;
    await ResourceService.delete(id, session.organizationId);
    return noContentResponse();
  } catch (error) {
    return errorResponse(error);
  }
}
