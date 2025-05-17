"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSection } from "context/section";
import useScrollActive from "hooks/useScrollActive";

import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      q(".profile-picture"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: q(".profile-picture"),
          start: "20% bottom",
        },
      },
    );

    const fromAnimation = {
      y: 100,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        start: "top bottom",
      },
    });

    // about-intro
    gsap.fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));

    // edu-bg
    gsap.fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));

    // bg svg parallax effect
    gsap.fromTo(
      q(".bg-svg"),
      { y: -80 },
      {
        scrollTrigger: {
          trigger: q(".bg-svg"),
          scrub: true,
        },
        y: 65,
        duration: 3,
      },
    );

    // image bg svg parallax effect
    gsap.fromTo(
      q(".img-svg"),
      { y: -30 },
      {
        scrollTrigger: {
          trigger: q(".img-svg"),
          start: "80% 75%",
          scrub: true,
        },
        y: 30,
      },
    );
  }, []);

  const eduRef = useRef<HTMLDivElement>(null);

  // Set active link for about section
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (aboutSection) {
      onSectionChange?.("who am i?");
    } else {
      onSectionChange?.("");
    }
  }, [aboutSection, onSectionChange]);

  return (
    <div ref={sectionRef} className="about-panel bg-secondary-black px-4">
      <section
        id="about"
        className="flex scroll-mt-[64px] flex-col gap-8 section max-w-5xl mx-auto py-12"
      >
        <h2 className="section-heading text-3xl md:text-4xl text-center font-bold">
          About
        </h2>
        <div className="flex flex-col gap-8 align-center">
          <p className="col-start-1 col-end-3 row-start-4 row-end-6 lg:lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro sm:text-center">
            Software engineer at Oracle Cloud and M.S. Computer Science
            candidate at Unversity of Texas at Austin, currently located in
            downtown Austin. Specializing in artifical intelligence and
            distributed systems.
          </p>
          <div className="flex flex-col gap-2">
            <div
              className="flex flex-col gap-3 align-center lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:ml-8 lg:mt-auto"
              ref={eduRef}
            >
              <h3 className="edu-bg my-4 text-xl md:text-2xl font-bold">
                Education
              </h3>
              <div className="flex flex-col justify-center align-center gap-4">
                {educationInfo.map((edu) => (
                  <EduGroup edu={edu} key={edu.id} />
                ))}
              </div>
            </div>
            <div
              className="flex flex-col gap-3 align-center lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:ml-8 lg:mt-auto"
              ref={eduRef}
            >
              <h3 className="edu-bg my-4 text-xl md:text-2xl font-bold">
                Work Experience
              </h3>
              <div className="flex flex-col justify-center align-center gap-4">
                {workInfo.map((work) => (
                  <EduGroup edu={work} key={work.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "Master of Science (MS) in Computer Science",
    subTitle: "University of Texas at Austin | 2024 - 2026",
    list: [
      "4.0 GPA",
      "Coursework in artificial intelligence, machine learning, and distributed systems",
    ],
  },
  {
    id: 2,
    title: "Bachelors of Science (BS) in Computer Science",
    subTitle: "Rutgers University | 2021 - 2024",
    list: [
      "Graduated with honors",
      "Winner of the HackRU 2024 Hackathon education track",
    ],
  },
  ,
];

const workInfo = [
  {
    id: 1,
    title: "Software Engineer",
    subTitle: "Oracle Cloud | July 2024 - Present",
    list: [" ", " "],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    subTitle: "Oracle Cloud | June 2023 - August 2023",
    list: [" ", " "],
  },
];

export default AboutSection;
