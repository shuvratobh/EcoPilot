"use client";

/**
 * Global Error Boundary
 *
 * Catches unhandled errors in the React tree.
 * Never exposes error details to the user — logs internally.
 *
 * Based on: docs/01_MASTER_RULES.md — Error Handling
 */

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to internal monitoring (Sentry etc. to be added in Phase 10)
    console.error("[GlobalError]", error.digest ?? "unknown", error.message);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
          <div className="text-center">
            <p className="mb-2 text-5xl">⚠️</p>
            <h1 className="mb-3 text-2xl font-semibold text-foreground">
              Something went wrong
            </h1>
            <p className="mb-8 max-w-sm text-muted-foreground">
              An unexpected error occurred. Our team has been notified. Please
              try again.
            </p>
            <button
              onClick={reset}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-brand-500 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
