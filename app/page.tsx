"use client";

import "./globals.css";

import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import FooterSection from "@/sections/FooterSection";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const headerTitle =(
	<Link
		href="/"
		onClick={(e) => {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}}
		className="text-primary-white text-xl hover:font-semibold sm:text-2xl hover:text-shadow-primary-white hover:text-shadow-lavender transition duration-700 ease-in-out "
	>
		dsp
		<span className="text-lavender">.dev</span>
	</Link>
) 

const navLinks = [
  {
    url: "/#about",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
      </svg>
    ),
    text: "About",
  },
  {
    url: "/blog",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z" />
        <path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z" />
      </svg>
    ),
    text: "Blog",
  },
  {
    url: "/#projects",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
      </svg>
    ),
    text: "Projects",
  },
  {
    url: "/#contact",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z" />
      </svg>
    ),
    text: "Contact",
  },
]

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
            <Header title={headerTitle} mobileNav={true} navLinks={navLinks} animationDelay={1} animationDuration={1} />
            <main id="main">
              <HeroSection />
              <AboutSection />
              <ProjectSection />
              <ContactSection />
            </main>
            <FooterSection text={<span className="text-primary-white text-xs md:text-sm">Developed in <a className="underline text-lavender hover:font-bold cursor-pointer" href="https://github.com/DylanPina/neovim-config">neovim</a> btw</span>} animationDelay={1} animationDuration={1}/>
          </div>
        </div>
      </body>
    </html>
  );
}
