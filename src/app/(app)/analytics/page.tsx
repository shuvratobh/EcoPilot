import type { Metadata } from "next";
export const metadata: Metadata = { title: "Analytics" };
export default function AnalyticsPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Analytics</h1>
      <p className="text-muted-foreground">Analytics UI — Phase 4</p>
    </div>
  );
}
