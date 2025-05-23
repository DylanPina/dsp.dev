"use client";

import "./globals.css";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
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
          </main>
        </div>
      </div>
    </>
  );
}
