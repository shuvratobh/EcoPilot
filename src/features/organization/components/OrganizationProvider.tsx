"use client";

import { useMemo } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { OrganizationContext } from "../context/OrganizationContext";

interface OrganizationProviderProps {
  children: React.ReactNode;
}

export function OrganizationProvider({ children }: OrganizationProviderProps) {
  const { user } = useAuth();

  const value = useMemo(() => {
    return {
      organizationId: user?.organizationId || null,
    };
  }, [user?.organizationId]);

  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  );
}
