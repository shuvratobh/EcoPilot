import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EcoPilot — AI-Powered Sustainability Intelligence",
  description:
    "Monitor, analyze, and improve your organization's sustainability with AI-powered insights. Track electricity, water, paper, and waste. Get your EcoScore today.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}
