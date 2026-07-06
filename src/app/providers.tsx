"use client";

/**
 * Client-Side Providers
 *
 * Centralizes all React context providers in one place.
 * Wraps the entire application from the root layout.
 *
 * Providers included:
 * - ThemeProvider (next-themes) — light/dark/system
 * - Toaster (sonner) — toast notifications
 * - AuthProvider — Supabase authentication
 * - OrganizationProvider — Active organization context
 *
 * Note: React Query / TanStack Query will be added in Phase 1.
 */

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { AuthProvider } from "@/features/auth/components/AuthProvider";
import { OrganizationProvider } from "@/features/organization/components/OrganizationProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <OrganizationProvider>
          {children}
        </OrganizationProvider>
      </AuthProvider>
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        duration={4000}
        toastOptions={{
          classNames: {
            toast: "font-sans",
          },
        }}
      />
    </ThemeProvider>
  );
}
