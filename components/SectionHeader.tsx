"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
};

export default function SectionHeader({ title }: Props) {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!underlineRef.current || !headerRef.current) return;

    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left",
        duration: 0.7,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          start: "top 100%",
          trigger: headerRef.current,
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className="project-title text-center">
      <h1
        ref={headerRef}
        className="relative inline-block section-heading text-3xl md:text-5xl font-bold z-10"
      >
        <span className="relative z-10">{title}</span>
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-0 h-[4px] w-full bg-lavender z-0 scale-x-0"
        />
      </h1>
    </div>
  );
}
