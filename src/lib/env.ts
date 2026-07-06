/**
 * Environment Variable Validation
 *
 * Validates all required environment variables at startup using Zod.
 * The application will throw a clear error on startup if any required
 * variable is missing — preventing silent failures in production.
 *
 * Based on: docs/13_SECURITY_GUIDELINES.md — Secrets Management
 */

import { z } from "zod";

// ── Server-side environment variables ─────────────────────────────────────────
// These are NEVER exposed to the browser.

const serverSchema = z.object({
  // Database
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
  DIRECT_URL: z.string().url("DIRECT_URL must be a valid URL"),

  // Supabase (server)
  SUPABASE_SERVICE_ROLE_KEY: z
    .string()
    .min(1, "SUPABASE_SERVICE_ROLE_KEY is required"),

  // AI
  GOOGLE_GENERATIVE_AI_API_KEY: z
    .string()
    .min(1, "GOOGLE_GENERATIVE_AI_API_KEY is required"),

  AI_PROVIDER: z.enum(["gemini"]).default("gemini"),

  // Node
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

// ── Public environment variables ──────────────────────────────────────────────
// These are safe to expose to the browser (NEXT_PUBLIC_ prefix).

const clientSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z
    .string()
    .url("NEXT_PUBLIC_SUPABASE_URL must be a valid URL"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  NEXT_PUBLIC_APP_URL: z
    .string()
    .url("NEXT_PUBLIC_APP_URL must be a valid URL")
    .default("http://localhost:3000"),
  NEXT_PUBLIC_APP_NAME: z.string().default("EcoPilot"),
});

// ── Validation ────────────────────────────────────────────────────────────────

function validateEnv() {
  // Skip validation during build time for public env vars
  const isServer = typeof window === "undefined";

  if (isServer) {
    const parsed = serverSchema.safeParse(process.env);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const messages = Object.entries(errors)
        .map(([key, val]) => `  ${key}: ${val?.join(", ")}`)
        .join("\n");

      throw new Error(
        `\n\n❌ Invalid server environment variables:\n${messages}\n\n` +
          `Copy .env.example to .env.local and fill in the required values.\n`,
      );
    }
  }

  const parsedClient = clientSchema.safeParse(process.env);

  if (!parsedClient.success) {
    const errors = parsedClient.error.flatten().fieldErrors;
    const messages = Object.entries(errors)
      .map(([key, val]) => `  ${key}: ${val?.join(", ")}`)
      .join("\n");

    throw new Error(
      `\n\n❌ Invalid public environment variables:\n${messages}\n\n` +
        `Ensure all NEXT_PUBLIC_ variables are set in your .env.local file.\n`,
    );
  }

  return {
    server: isServer ? serverSchema.parse(process.env) : ({} as z.infer<typeof serverSchema>),
    client: parsedClient.data,
  };
}

// ── Exports ───────────────────────────────────────────────────────────────────

export const env = validateEnv();

// Convenience re-exports for common server vars
export const serverEnv = env.server;

// Convenience re-exports for common client vars
export const clientEnv = env.client;
