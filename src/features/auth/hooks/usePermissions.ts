"use client";

import { useAuth } from "./useAuth";
import { hasPermission, type Permission } from "@/lib/auth/permissions";

export function usePermissions() {
  const { user, isLoading } = useAuth();

  const can = (permission: Permission): boolean => {
    if (!user || !user.role) return false;
    return hasPermission(user.role, permission);
  };

  return { can, isLoading };
}
