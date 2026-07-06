/**
 * Next.js Edge Middleware
 *
 * Responsibilities:
 * 1. Refresh Supabase auth session on every request
 * 2. Redirect unauthenticated users to /auth/login
 * 3. Protect all /api/v1/* routes
 *
 * Based on: docs/09_SYSTEM_ARCHITECTURE.md — Middleware
 * Based on: docs/04_INFORMATION_ARCHITECTURE.md — Onboarding Flow
 */

import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// ── Route Configuration ───────────────────────────────────────────────────────

const PUBLIC_ROUTES = [
  "/",
  "/pricing",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
];
const AUTH_ROUTES = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
];

// Define paths that explicitly require authentication
const PROTECTED_PREFIXES = [
  "/app",
  "/dashboard",
  "/settings",
  "/reports",
];

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith("/api/v1/auth"));
}

function isAuthRoute(pathname: string): boolean {
  return AUTH_ROUTES.some((route) => pathname.startsWith(route));
}

function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

// ── Middleware ────────────────────────────────────────────────────────────────

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Internal job routes: protected by job secret, not by session ──────────
  if (pathname.startsWith("/api/internal/")) {
    const secret = request.headers.get("x-job-secret");
    if (secret !== process.env.JOB_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // ── Refresh Supabase session ──────────────────────────────────────────────
  const { supabaseResponse, user } = await updateSession(request);

  // ── Public routes: allow through ──────────────────────────────────────────
  if (isPublicRoute(pathname)) {
    // Redirect authenticated users away from auth pages
    if (user && isAuthRoute(pathname)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return supabaseResponse;
  }

  // ── Protected routes: require authentication ──────────────────────────────
  if (isProtectedRoute(pathname)) {
    if (!user) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirectTo", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ── Onboarding check is handled by the onboarding page itself ─────────────
  // The service layer checks if onboarding is complete on dashboard load.
  // Middleware does not query the DB (edge runtime limitation).

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|icons).*)",
  ],
};
