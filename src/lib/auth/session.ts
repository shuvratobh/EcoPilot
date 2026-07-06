/**
 * Auth Session Utilities
 *
 * Server-side helpers for getting the current session and enforcing
 * authentication and authorization on API routes.
 *
 * Based on: docs/13_SECURITY_GUIDELINES.md — Authentication
 * Based on: docs/01_MASTER_RULES.md — Authorization is enforced on the server
 *
 * IMPORTANT: Never trust frontend role checks. Always verify on the server.
 */

import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/db/prisma";
import { hasPermission, type Permission } from "@/lib/auth/permissions";
import type { UserRole } from "@prisma/client";
import { UnauthorizedError, ForbiddenError } from "@/lib/errors";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface SessionUser {
  supabaseId: string;
  email: string;
  organizationId: string;
  role: UserRole;
  name: string;
  avatarUrl: string | null;
}

// ── Session Helpers ───────────────────────────────────────────────────────────

/**
 * Gets the current authenticated user from Supabase + Prisma.
 * Returns null if not authenticated.
 */
export async function getSession(): Promise<SessionUser | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const orgUser = await prisma.organizationUser.findFirst({
    where: {
      userId: user.id,
      deletedAt: null,
    },
    select: {
      role: true,
      organizationId: true,
      name: true,
      avatarUrl: true,
    },
  });

  if (!orgUser) return null;

  return {
    supabaseId: user.id,
    email: user.email ?? "",
    organizationId: orgUser.organizationId,
    role: orgUser.role,
    name: orgUser.name,
    avatarUrl: orgUser.avatarUrl,
  };
}

/**
 * Requires authentication. Throws UnauthorizedError if not authenticated.
 */
export async function requireAuth(): Promise<SessionUser> {
  const session = await getSession();

  if (!session) {
    throw new UnauthorizedError();
  }

  return session;
}

/**
 * Requires authentication AND a specific permission.
 * Throws UnauthorizedError or ForbiddenError as appropriate.
 */
export async function requirePermission(permission: Permission): Promise<SessionUser> {
  const session = await requireAuth();

  if (!hasPermission(session.role, permission)) {
    throw new ForbiddenError();
  }

  return session;
}
