"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";

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

    const tl = gsap.timeline({ defaults: { stagger: 0.2, duration: 0.3 } });
    tl.fromTo(q(".text-animation"), { y: 100 }, { y: 0, delay: 0.75 });

    gsap.to(q(".scramble-text"), {
      scrambleText: {
        text: "Talk is cheap... show me the code",
        chars: "0123456789ABCDEF",
        speed: 0.4,
        revealDelay: 0.8,
      },
      duration: 1.5,
    });
  }, [q]);

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto flex flex-col justify-center items-center lg:flex-row-reverse w-full"
    >
      <div className="lg:basis-2/3 z-10 relative">
        <div className="overflow-hidden">
          <h1 className="text-animation text-center text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
            Dylan Pina
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="text-animation text-center text-2xl md:text-3xl lg:text-5xl block md:my-3 text-lavender">
            Software Engineer
          </span>
        </div>
        <div className="overflow-hidden mt-3 my-4 md:mb-8 text-lg">
          <p className="scramble-text text-center mb-1">
            Talk is cheap... show me the code
          </p>
        </div>
      </div>
      <a
        href="#whoami"
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
