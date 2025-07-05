"use client";

import SocialLinks from "@/components/SocialLinks";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Props {
  animationDelay?: number
  animationDuration?: number
}

const Footer: React.FC<Props> = ({ animationDelay, animationDuration }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current?.children,
      {
        opacity: 0,
        y: 20,
        scale: 0.7,
        delay: animationDuration,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        stagger: 0.25,
        delay: animationDuration,
        ease: "power2.out",
      },
    );
  }, [animationDelay, animationDuration]);

  return (
    <footer className="flex flex-col gap-4 md:gap-8 justify-center p-4 md:pb-[60px] pb-[120px] text-center mt-auto" ref={containerRef}>
      <SocialLinks animationDelay={animationDelay ?? 0} animationDuration={animationDuration ?? 0} />
      <div className="text-primary-white text-xs md:text-sm">
        Developed in{" "}
        <a
          className="underline text-lavender hover:font-bold cursor-pointer"
          href="https://github.com/DylanPina/neovim-config"
        >
          neovim
        </a>{" "}
        btw
      </div>
    </footer>
  );
};

export default Footer;
