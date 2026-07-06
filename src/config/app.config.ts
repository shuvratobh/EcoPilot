/**
 * Application Configuration
 *
 * Central app-level constants and feature flags.
 * Based on: docs/00_PROJECT_OVERVIEW.md, docs/02_PRODUCT_REQUIREMENTS.md
 */

export const APP_CONFIG = {
  name: "EcoPilot",
  description: "AI-powered Sustainability Intelligence Platform",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  version: "0.1.0",

  /** Pagination defaults */
  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },

  /** File upload limits (from docs/13_SECURITY_GUIDELINES.md) */
  upload: {
    maxFileSizeBytes: 20 * 1024 * 1024, // 20 MB
    allowedMimeTypes: [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ] as const,
    allowedExtensions: [".pdf", ".png", ".jpg", ".jpeg"] as const,
  },

  /** Onboarding trigger: redirect if org has no data */
  onboarding: {
    /** Route for the onboarding wizard */
    route: "/onboarding",
    /** Routes that bypass onboarding redirect */
    bypassRoutes: ["/onboarding", "/settings", "/team"],
  },

  /** Supabase Storage bucket names */
  storage: {
    documentsBucket: "documents",
    reportsBucket: "reports",
    avatarsBucket: "avatars",
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
