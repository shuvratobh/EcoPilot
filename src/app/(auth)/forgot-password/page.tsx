import type { Metadata } from "next";

export const metadata: Metadata = { title: "Reset Password" };

export default function ForgotPasswordPage() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-foreground">Forgot password</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Enter your email and we&apos;ll send you a reset link.
      </p>
      {/* Phase 1: ForgotPasswordForm will be rendered here */}
      <p className="text-center text-sm text-muted-foreground">
        Password Reset UI — Phase 1
      </p>
    </div>
  );
}
