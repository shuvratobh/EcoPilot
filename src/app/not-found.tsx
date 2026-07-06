import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="mb-2 text-6xl font-bold text-brand-500">404</p>
        <h1 className="mb-3 text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mb-8 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-brand-500 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
