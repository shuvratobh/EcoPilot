import type { Metadata } from "next";

export const metadata: Metadata = { title: "Create Account" };

export default function RegisterPage() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-foreground">Create your account</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Start your sustainability journey with EcoPilot
      </p>
      {/* Phase 1: RegisterForm component will be rendered here */}
      <p className="text-center text-sm text-muted-foreground">
        Registration UI — Phase 1
      </p>
    </div>
  );
}
