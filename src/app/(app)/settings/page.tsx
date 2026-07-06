import type { Metadata } from "next";
export const metadata: Metadata = { title: "Settings" };
export default function SettingsPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Settings</h1>
      <p className="text-muted-foreground">Settings UI — Phase 7</p>
    </div>
  );
}
