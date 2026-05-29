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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velcy.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Velcy — Sprints. Reimagined.",
  description: "The agile workspace built for software teams that ship.",
  icons: {
    icon: [
      { url: "/velcy-favicon-16.svg", type: "image/svg+xml" },
      { url: "/velcy-favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/velcy-icon-180.png",
  },
  openGraph: {
    title: "Velcy — Sprints. Reimagined.",
    description: "The agile workspace built for software teams that ship.",
    url: siteUrl,
    siteName: "Velcy",
    type: "website",
    images: [{ url: "/velcy-og-card.png", width: 1200, height: 630, alt: "Velcy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velcy — Sprints. Reimagined.",
    description: "The agile workspace built for software teams that ship.",
    images: ["/velcy-og-card.png"],
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
