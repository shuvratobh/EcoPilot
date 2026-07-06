import type { Metadata } from "next";
export const metadata: Metadata = { title: "Documents" };
export default function DocumentsPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Documents</h1>
      <p className="text-muted-foreground">Document Management UI — Phase 10</p>
    </div>
  );
}
