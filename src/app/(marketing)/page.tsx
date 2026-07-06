import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EcoPilot — AI-Powered Sustainability Intelligence",
};

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      {/* Phase 2: Full marketing landing page will be implemented here */}
      <div className="text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand-500/10 px-4 py-1.5">
          <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
            🌱 AI Sustainability Intelligence
          </span>
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
          EcoPilot
        </h1>
        <p className="mb-8 max-w-md text-lg text-muted-foreground">
          Monitor, analyze, and improve your organization's sustainability with
          AI-powered insights.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/register"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get Started Free
          </Link>
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
