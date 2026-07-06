import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-foreground">Welcome back</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Sign in to your EcoPilot account
      </p>
      {/* Phase 1: LoginForm component will be rendered here */}
      <p className="text-center text-sm text-muted-foreground">
        Authentication UI — Phase 1
      </p>
    </div>
  );
}
