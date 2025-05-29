"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import SocialLinks from "@/components/SocialLinks";

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.to(q(".bg-text"), {
      scrollTrigger: {
        trigger: q(".bg-text"),
        scrub: true,
      },
      y: 350,
    });

    const tl = gsap.timeline({ defaults: { stagger: 0.35, duration: 0.5 } });
    tl.fromTo(q(".text-animation"), { y: 100 }, { y: 0, delay: 1.1 });

    gsap.to(q(".scramble-text"), {
      scrambleText: {
        text: "Talk is cheap... show me the code",
        chars: "0123456789ABCDEF",
        speed: 0.7,
        revealDelay: 1.3,
      },
      duration: 2.7,
    });
  }, [q]);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 max-w-5xl h-screen min-h-[769px] mx-auto flex flex-col justify-center items-center w-full"
    >
      <div className="z-10 relative">
        <div className="overflow-hidden">
          <h1 className="text-animation text-center text-5xl md:text-6xl lg:text-7xl font-semibold text-shadow-lg">
            Dylan Pina
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="text-animation text-center text-3xl md:text-4xl lg:text-5xl block md:my-3 text-lavender">
            Software Engineer
          </span>
        </div>
        <div className="overflow-hidden mt-3 my-4 md:mb-8 md:text-md lg:text-xl sm:text-lg text-center">
          <p className="scramble-text text-center mb-1">
            Talk is cheap... show me the code
          </p>
        </div>

        <SocialLinks />
      </div>
      <a
        href="#about"
        className="group absolute link-outline animate-bounce hidden md:bottom-14 lg:bottom-16 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col"
      >
        <span className="group-hover:text-marrsgreen dark:group-hover:text-lavender">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="fill-primary-white group-hover:fill-lavender"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="fill-primary-white group-hover:fill-lavender"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
