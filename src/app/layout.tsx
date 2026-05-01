import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow, IBM_Plex_Mono } from "next/font/google";
import { LOGO_PATH } from "@/lib/constants";
import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const body = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://dareto-dream.github.io/hustle_hub/"
  ),
  title: "Solo Hustle Hub — Freelance · Jobs · Hiring · Employees",
  description:
    "The Discord community where freelancers and clients mean business. No scams, no time-wasters — just real opportunities, real work, real money.",
  icons: { icon: LOGO_PATH },
  openGraph: {
    title: "Solo Hustle Hub — Freelance · Jobs · Hiring · Employees",
    description:
      "Post jobs. Showcase your skills. Build your hustle. Join the Discord.",
    images: ["logo.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
