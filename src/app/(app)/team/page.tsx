import type { Metadata } from "next";
export const metadata: Metadata = { title: "Team" };
export default function TeamPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Team Management</h1>
      <p className="text-muted-foreground">Team UI — Phase 9</p>
    </div>
  );
}
