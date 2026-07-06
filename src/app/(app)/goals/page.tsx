import type { Metadata } from "next";
export const metadata: Metadata = { title: "Goals" };
export default function GoalsPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Goals</h1>
      <p className="text-muted-foreground">Goals UI — Phase 8</p>
    </div>
  );
}
