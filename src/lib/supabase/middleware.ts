/**
 * Supabase Middleware Helper
 *
 * Refreshes the Supabase auth session in Next.js middleware.
 * Must be called in src/middleware.ts on every request to keep
 * the session cookie up to date.
 *
 * Based on: @supabase/ssr middleware pattern
 */

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    env.client.NEXT_PUBLIC_SUPABASE_URL,
    env.client.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Refresh session — do not write any logic between createServerClient
  // and supabase.auth.getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { supabaseResponse, user };
}
