"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSection } from "context/section";
import useScrollActive from "hooks/useScrollActive";

import ExperienceGroup from "@/components/ExperienceGroup";

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
  const experienceSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (experienceSection) {
      onSectionChange?.("who am i?");
    } else {
      onSectionChange?.("");
    }
  }, [experienceSection, onSectionChange]);

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
            {`Software engineer at Oracle Cloud based in Austin, TX.
            Currently persuing a Master's in Computer Science with a focus in
            Artifical Intelligence & Distributed Systems at University of
            Texas at Austin.`}
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
                  <ExperienceGroup edu={edu} key={edu.id} />
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
                  <ExperienceGroup edu={work} key={work.id} />
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
];

const workInfo = [
  {
    id: 1,
    title: "Software Engineer",
    subTitle: "Oracle Cloud Infrastructure | Austin, TX | July 2024 - Present",
    list: [
      "Engineer on OCI Bastions, a tier 0 cloud security service enabling secure access to private cloud infrastructure through a zero trust architecture",
      "Developed services for cloud security platforms and high-performance AI infrastructure",
    ],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    subTitle:
      "Oracle Cloud Infrastructure | Austin, TX | June 2023 - August 2023",
    list: [
      "Engineer on OCI Cloud Guard, building scalable systems for real-time threat detection, anomaly analysis, and automated remediation",
      "Designed and developed ETL pipelines for automating data warehouse migrations with integrated anomaly detection for pipeline monitoring",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    subTitle: "Inovalon | Remote | June 2022 - May 2023",
    list: [
      "Led the design and development of a proprietary Angular UI component library along with multiple healthcare analytics API portals, enhancing frontend consistency and accelerating product development across teams",
      "Developed an interactive healthcare data visualization platform using AWS and modern web technologies to deliver actionable insights to clinical and operational stakeholders",
    ],
  },
];

export default AboutSection;
