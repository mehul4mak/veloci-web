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
    default: "Veloci — The agile workspace built for shipping",
    template: "%s · Veloci",
  },
  description:
    "Sprints, kanban, capacity planning, and an AI assistant — in one beautifully fast workspace. Built for teams that ship.",
  openGraph: {
    title: "Veloci — The agile workspace built for shipping",
    description:
      "Sprints, kanban, capacity planning, and an AI assistant — in one beautifully fast workspace.",
    url: siteUrl,
    siteName: "Veloci",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloci",
    description:
      "The agile workspace built for shipping. Sprints, kanban, AI — done right.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
