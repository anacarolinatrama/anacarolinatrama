import type { Metadata, Viewport } from "next";
import { Archivo_Black, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { pt } from "@/content/pt";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pt.meta.title,
  description: pt.meta.description,
  openGraph: {
    title: pt.meta.title,
    description: pt.meta.description,
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
  },
};

export const viewport: Viewport = {
  themeColor: "#12224C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
