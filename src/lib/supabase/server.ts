/**
 * Supabase Server Client
 *
 * Use this client inside:
 * - Server Components
 * - Route Handlers (API routes)
 * - Server Actions
 * - Middleware
 *
 * Uses createServerClient from @supabase/ssr with cookie handling.
 *
 * Based on: docs/09_SYSTEM_ARCHITECTURE.md
 */

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { env } from "@/lib/env";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    env.client.NEXT_PUBLIC_SUPABASE_URL,
    env.client.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // setAll called from a Server Component — cookies can't be
            // set server-side. The middleware handles session refresh.
          }
        },
      },
    },
  );
}
