import type { Metadata } from "next";

export const metadata: Metadata = { title: "Onboarding" };

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold text-foreground">
          Welcome to EcoPilot 🌱
        </h1>
        <p className="mb-8 text-muted-foreground">
          Let&apos;s set up your sustainability tracking in 3 minutes.
        </p>
        {/* Phase 1: OnboardingWizard component will be rendered here */}
        <div className="rounded-xl border border-border bg-card p-8">
          <p className="text-center text-sm text-muted-foreground">
            Onboarding Wizard — Phase 1
          </p>
        </div>
      </div>
    </div>
  );
}
