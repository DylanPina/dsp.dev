import "./globals.css";

import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import FooterSection from "@/sections/FooterSection";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dylan Pina - Developer Portfolio",
  description: "Dylan Pina - Developer Portfolio",
};

export default function Home() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader>
          dsp.<span className="text-lavender">dev</span>
        </Loader>
        <div className="bg-primary-black overflow-hidden min-h-screen flex flex-col">
          <div className="selection:lavender flex flex-col min-h-screen">
            <Header animationDelay={1} animationDuration={1} />
            <main id="main">
              <HeroSection />
              <AboutSection />
              <ProjectSection />
              <ContactSection />
            </main>
            <FooterSection animationDelay={1} animationDuration={1}/>
          </div>
        </div>
      </body>
    </html>
  );1
}
