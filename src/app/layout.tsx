import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EcoPilot — AI Sustainability Intelligence",
    template: "%s | EcoPilot",
  },
  description:
    "EcoPilot helps organizations monitor, analyze, and improve office sustainability with AI-powered insights and actionable recommendations.",
  keywords: [
    "sustainability",
    "ESG",
    "carbon tracking",
    "office sustainability",
    "AI sustainability",
    "EcoScore",
  ],
  authors: [{ name: "EcoPilot" }],
  creator: "EcoPilot",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "EcoPilot — AI Sustainability Intelligence",
    description:
      "Monitor, analyze, and improve your organization's sustainability with AI-powered insights.",
    siteName: "EcoPilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoPilot — AI Sustainability Intelligence",
    description: "AI-powered office sustainability platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
