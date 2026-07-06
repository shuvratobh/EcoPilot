/**
 * RBAC Permission System
 *
 * Uses capability strings instead of raw role checks.
 * This pattern prevents hardcoded role checks scattered across the codebase.
 *
 * Usage:
 *   // ✅ Correct
 *   user.hasPermission("manage_reports")
 *
 *   // ❌ Incorrect (from docs/13_SECURITY_GUIDELINES.md)
 *   if (user.role === "Admin")
 *
 * Based on: docs/13_SECURITY_GUIDELINES.md — Authorization
 * Based on: docs/01_MASTER_RULES.md — Authorization
 */

import { UserRole } from "@prisma/client";

// ── Permission Capability Strings ─────────────────────────────────────────────

export type Permission =
  // Resource management
  | "create_resource"
  | "read_resource"
  | "update_resource"
  | "delete_resource"
  // Department management
  | "create_department"
  | "update_department"
  | "delete_department"
  // User management
  | "invite_user"
  | "update_user_role"
  | "remove_user"
  // Document management
  | "upload_document"
  | "delete_document"
  // Goal management
  | "create_goal"
  | "update_goal"
  | "delete_goal"
  // Report management
  | "generate_report"
  | "delete_report"
  | "read_report"
  // AI Copilot
  | "use_ai_copilot"
  | "generate_ai_report"
  // Organization
  | "manage_organization"
  | "manage_settings"
  // Audit
  | "read_audit_log"
  // Admin
  | "admin_all";

// ── Role → Permissions Map ────────────────────────────────────────────────────

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.OrganizationOwner]: [
    // Full access
    "create_resource",
    "read_resource",
    "update_resource",
    "delete_resource",
    "create_department",
    "update_department",
    "delete_department",
    "invite_user",
    "update_user_role",
    "remove_user",
    "upload_document",
    "delete_document",
    "create_goal",
    "update_goal",
    "delete_goal",
    "generate_report",
    "delete_report",
    "read_report",
    "use_ai_copilot",
    "generate_ai_report",
    "manage_organization",
    "manage_settings",
    "read_audit_log",
    "admin_all",
  ],

  [UserRole.CompanyAdmin]: [
    "create_resource",
    "read_resource",
    "update_resource",
    "delete_resource",
    "create_department",
    "update_department",
    "invite_user",
    "update_user_role",
    "upload_document",
    "delete_document",
    "create_goal",
    "update_goal",
    "delete_goal",
    "generate_report",
    "read_report",
    "use_ai_copilot",
    "generate_ai_report",
    "manage_settings",
    "read_audit_log",
  ],

  [UserRole.DepartmentManager]: [
    "create_resource",
    "read_resource",
    "update_resource",
    "upload_document",
    "create_goal",
    "update_goal",
    "generate_report",
    "read_report",
    "use_ai_copilot",
    "generate_ai_report",
  ],

  [UserRole.Employee]: [
    "read_resource",
    "create_resource",
    "upload_document",
    "read_report",
    "use_ai_copilot",
  ],
};

// ── Permission Check ──────────────────────────────────────────────────────────

/**
 * Checks if a user role has the given permission.
 * Always call this on the server — never trust client-side checks.
 */
export function hasPermission(role: UserRole, permission: Permission): boolean {
  const permissions = ROLE_PERMISSIONS[role];
  return permissions.includes(permission) || permissions.includes("admin_all");
}

/**
 * Returns all permissions for a given role.
 */
export function getPermissions(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS[role];
}
