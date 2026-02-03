import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LightRays } from "@/components/ui/light-rays";

import Header from "@/components/layout/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lukasgryc.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Lukáš Gryč",
    template: "%s | Lukáš Gryč",
  },
  description:
    "Všechno co jste chtěli i nechtěli o mně vědět, ale báli jste se zeptat",
  openGraph: {
    title: "Lukáš Gryč",
    description:
      "Všechno co jste chtěli i nechtěli o mně vědět, ale báli jste se zeptat",
    url: siteUrl,
    siteName: "Lukáš Gryč",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lukáš Gryč",
    description:
      "Všechno co jste chtěli i nechtěli o mně vědět, ale báli jste se zeptat",
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            const stored = localStorage.getItem("theme");
            const theme = stored ?? "dark"; // DEFAULT = dark
            if (theme === "dark") {
              document.documentElement.classList.add("dark");
            }
          })();
        `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-ring focus:rounded-md"
        >
          Přeskočit na hlavní obsah
        </a>
        <div className="w-full h-full relative">
          <LightRays className="z-[-1] absolute h-full" aria-hidden />
          <div className="w-full z-10">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
