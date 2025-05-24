"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

import rucshub from "public/projects/rucshub.webp";
import askanon from "public/projects/askanon.webp";
import socketchat from "public/projects/socketchat.webp";
import paxcoins from "public/projects/paxcoins.webp";

const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex scroll-mt-[64px] flex-col gap-8 section px-4 max-w-5xl mx-auto py-12"
    >
      <div className="project-title text-center">
        <h2 className="section-heading text-3xl md:text-4xl text-center font-bold">
          Projects
        </h2>
      </div>
      <div className="flex flex-wrap rounded-lg">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Checkout some of my other projects on{" "}
        <a
          href="https://github.com/DylanPina"
          className="font-medium underline link-outline whitespace-nowrap hover:text-lavender hover:font-bold"
        >
          github
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "RUCS Hub",
    type: "Fullstack",
    image: (
      <Image
        src={rucshub}
        sizes="100vw"
        alt="RUCS Hub"
        className="transition-transform duration-500 scale-75 max-w-50 my-auto justify-center center m-auto hover:scale-90 object-cover"
      />
    ),
    desc: "Platform for Rutgers University students to share reviews and ratings for their courses and professors.",
    tags: [
      "TypeScript",
      "React",
      "NextJS",
      "Auth0",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    liveUrl:
      "https://www.linkedin.com/posts/dylan-pina-swe_today-i-am-launching-rucs-hub-httpswwwrucshubcom-activity-7198747581902897152-13RK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQFO0oBXdjeL3fDY3zSzEY6x1fcau0wTxg",
    codeUrl: "https://github.com/DylanPina/RUCS-Hub",
    bgColor: "",
    githubApi: "https://api.github.com/repos/DylanPina/RUCS-Hub",
  },
  {
    title: "AskAnon",
    type: "Fullstack",
    image: (
      <Image
        src={askanon}
        sizes="100vw"
        alt="AskAnon"
        className="transition-transform duration-500 max-w-50 justify-center center m-auto hover:scale-125 object-cover"
      />
    ),
    desc: "1st place in HackRU 2024 Hackathon for education track. Classroom live streaming platform for anonymous Q&A sessions.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Google Cloud"],
    liveUrl: "https://devpost.com/software/askanon",
    codeUrl: "https://github.com/DylanPina/AskAnon",
    bgColor: "",
    githubApi: "https://api.github.com/repos/DylanPina/AskAnon",
  },
  {
    title: "SocketChat",
    type: "Fullstack",
    image: (
      <Image
        src={socketchat}
        sizes="100vw"
        alt="SocketChat"
        className="transition-transform duration-500 h-75 outline outline-2 rounded-lg justify-center center m-auto hover:scale-125 object-cover"
      />
    ),
    desc: "Web-based messaging platform that uses web sockets for bidirectional low-latency communication",
    tags: ["React", "Typescript", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://github.com/DylanPina/SocketChat",
    codeUrl: "https://github.com/DylanPina/SocketChat",
    bgColor: "",
    githubApi: "https://api.github.com/repos/DylanPina/SocketChat",
  },
  {
    title: "PaxCoins",
    type: "Fullstack",
    image: (
      <Image
        src={paxcoins}
        sizes="100vw"
        alt="PaxCoins"
        className="transition-transform duration-500 h-75 outline outline-2 rounded-lg justify-center center m-auto hover:scale-125 object-cover"
      />
    ),
    desc: "Crytocurrency analytics dashboard",
    tags: ["React", "Firebase", "Google Cloud"],
    liveUrl: "https://github.com/DylanPina/PaxCoins",
    codeUrl: "https://github.com/DylanPina/PaxCoins",
    bgColor: "",
    githubApi: "https://api.github.com/repos/DylanPina/PaxCoins",
  },
];

export default ProjectSection;
