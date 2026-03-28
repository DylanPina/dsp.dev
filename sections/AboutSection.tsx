"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ExperienceGroup from "@/components/ExperienceGroup";
import SectionHeader from "@/components/SectionHeader";

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

  return (
    <div ref={sectionRef} className="about-panel">
      <section
        id="about"
        className="flex scroll-mt-[68px] flex-col gap-8 section max-w-5xl mx-auto py-8 px-4"
      >
        <SectionHeader title="About" />
        <p className="col-start-1 col-end-3 md:text-lg/6 text-md/6 row-start-4 row-end-6 lg:lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro sm:text-center">
          {`Software engineer at Oracle Cloud based in Austin, TX.
            Currently persuing a Master's in Computer Science with a focus in
            Artifical Intelligence & Distributed Systems at University of
            Texas at Austin.`}
        </p>
        <div className="flex flex-col gap-8 align-center">
          <div className="flex flex-col gap-4 md:gap-8">
            <div
              className="flex flex-col gap-3 align-center lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:ml-8 lg:mt-auto"
              ref={eduRef}
            >
              <h2 className="edu-bg my-4 text-xl md:text-2xl font-bold">
                Education
              </h2>
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
              <h2 className="edu-bg my-4 text-xl md:text-2xl font-bold">
                Work Experience
              </h2>
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
    place: "University of Texas at Austin",
    time: "2024 - 2026",
    bullets: [
      "4.0 GPA",
      "Coursework in artificial intelligence, machine learning, and distributed systems",
    ],
  },
  {
    id: 2,
    title: "Bachelors of Science (BS) in Computer Science",
    place: "Rutgers University New Brunswick",
    time: "2021 - 2024",
    bullets: [
      "Winner of the HackRU 2024 Hackathon education track",
    ],
  },
];

const workInfo = [
  {
    id: 1,
    title: "Software Engineer II",
    place: "Oracle Cloud | Austin, TX",
    time: "July 2024 - Present",
    bullets: [
      "Designed and implemented a cloud-native LLM agent platform using the A2A protocol to automate critical SDLC workflows, including unit test generation, security vulnerability patching, and large-scale codebase migrations",
      "Implemented RAG agents to assist on-call engineers, reducing mean time to resolution for operational incidents",
      "Built an AI-powered coding assistant that reviews, validates, and provides automated feedback on pull requests",
      "Built an MCP gateway service to securely host and manage Model Context Protocol (MCP) servers in the cloud",
      "Developed cloud security microservices in Go with IaaC in Terraform and automated DevOps workflows in Python",
      "Designed and scaled out a PySpark and Apache Kafka ETL pipeline ingesting GPU-cluster access and activity logs",
      "Led a zero-downtime migration of Bastion servers from Oracle Linux 7 to Oracle Linux 9",
    ],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    place: "Oracle Cloud | Austin, TX",
    time: "May 2023 - August 2023",
    bullets: [
      "Designed and productionized a scalable ML data pipeline using Python, Airflow, and Spark to ingest, cleanse, and enrich cloud security telemetry for anomaly-detection models at multi-terabyte scale",
      "Led a zero-downtime migration of 25+ TB of security findings into a lakehouse architecture with automated data-quality validation and Prometheus alerting, improving ML data reliability by 80%+",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    place: "Inovalon | Remote",
    time: "June 2022 - May 2023",
    bullets: [
      "Spearheaded the architecture and implementation of components, services, and comprehensive documentation for a proprietary Angular UI component library, streamlining the development of several core products",
      "Engineered a cloud-native developer portal for healthcare APIs using Angular, Java, AWS, and Okta OAuth2; delivered client demos, self-service docs, and real-time usage analytics, cutting client integration time by 50%",
    ],
  },
];

export default AboutSection;
