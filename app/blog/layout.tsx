"use client";

import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import FooterSection from "@/sections/FooterSection";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-primary-black overflow-hidden min-h-screen flex flex-col">
          <div className="selection:lavender flex flex-col min-h-screen">
            <Header animationDelay={0.1} animationDuration={0.5} />
            <main id="main" className="flex-1">
              {children}
            </main>
            <FooterSection animationDelay={0.1} animationDuration={0.5} />
          </div>
        </div>
      </body>
    </html>
  );
}