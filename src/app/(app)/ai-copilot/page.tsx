import type { Metadata } from "next";
export const metadata: Metadata = { title: "AI Copilot" };
export default function AICopilotPage() {
  return (
    <div className="page-container py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">AI Copilot</h1>
      <p className="text-muted-foreground">AI Copilot UI — Phase 5</p>
    </div>
  );
}
