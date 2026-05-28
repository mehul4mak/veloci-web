import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://veloci.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Veloci — Sprints. Reimagined.",
  description: "The agile workspace built for software teams that ship.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Veloci — Sprints. Reimagined.",
    description: "The agile workspace built for software teams that ship.",
    url: siteUrl,
    siteName: "Veloci",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloci — Sprints. Reimagined.",
    description: "The agile workspace built for software teams that ship.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
