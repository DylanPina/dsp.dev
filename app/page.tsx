"use client";

import "./globals.css";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import { useEffect } from "react";

export default function Home() {
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
    <>
      <Loader>
        dsp.<span className="text-lavender">dev</span>
      </Loader>
      <div className="bg-primary-black overflow-hidden">
        <div className="selection:lavender">
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <FooterSection />
        </div>
      </div>
    </>
  );
}
