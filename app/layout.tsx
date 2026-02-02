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

export const metadata: Metadata = {
  title: "Lukáš Gryč",
  description: "Všechno co jste chtěli i nechtěli o mně vědět, ale báli jste se zeptat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <div className="w-full h-full relative">
          <LightRays className="z-[-1] absolute h-full xdd" />
          <div className=" w-full z-10">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
