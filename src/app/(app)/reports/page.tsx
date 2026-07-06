import type { Metadata } from "next";
export const metadata: Metadata = { title: "Reports" };
export default function ReportsPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Reports</h1>
      <p className="text-muted-foreground">Reports UI — Phase 6</p>
    </div>
  );
}
