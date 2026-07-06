import type { Metadata } from "next";

export const metadata: Metadata = { title: "Set New Password" };

export default function ResetPasswordPage() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-foreground">Set new password</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Choose a strong password for your account.
      </p>
      {/* Phase 1: ResetPasswordForm will be rendered here */}
      <p className="text-center text-sm text-muted-foreground">
        Password Reset UI — Phase 1
      </p>
    </div>
  );
}
