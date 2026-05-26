import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://veloci.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Veloci — Agile project management for software teams",
    template: "%s · Veloci",
  },
  description:
    "Self-hostable, SaaS-ready, AI-assisted agile project management. Kanban, sprints, capacity planning, retros — in one Docker container.",
  openGraph: {
    title: "Veloci — Agile PM for software teams",
    description:
      "Self-hostable, SaaS-ready, AI-assisted agile project management.",
    url: siteUrl,
    siteName: "Veloci",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloci",
    description: "Agile PM for software teams. Self-hostable + SaaS-ready.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
