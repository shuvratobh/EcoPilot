/**
 * Supabase Browser Client
 *
 * Use this client inside Client Components ("use client").
 * Uses createBrowserClient from @supabase/ssr.
 *
 * Based on: docs/09_SYSTEM_ARCHITECTURE.md
 */

import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/lib/env";

export function createClient() {
  return createBrowserClient(
    env.client.NEXT_PUBLIC_SUPABASE_URL,
    env.client.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
