import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Dashboard</h1>
      <p className="text-muted-foreground">
        Dashboard UI — Phase 3
      </p>
    </div>
  );
}
