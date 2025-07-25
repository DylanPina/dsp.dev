"use client";

import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import gsap from "gsap";
import { FaDiscord } from "react-icons/fa";

interface Props {
  animationDelay: number
  animationDuration?: number
}

const SocialLinks: React.FC<Props> = ({animationDelay, animationDuration}) => {
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
    <div className="flex items-center justify-center">
      <div className="flex gap-4" ref={containerRef}>
        {socialLinks.map((social) => (
          <a
            key={social.id}
            title={social.title}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="text-4xl lg:text-5xl text-white transition duration-300 transform inline-block group-hover:text-lavender group-hover:scale-110 hover:animate-bounce">
              {social.svg}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

const socialLinks = [
  {
    id: 1,
    title: "Dylan Pina's Github Profile",
    link: "https://github.com/DylanPina",
    svg: <FaGithub />,
  },
  {
    id: 2,
    title: "Dylan Pina's LinkedIn Profile",
    link: "https://www.linkedin.com/in/dylan-pina-swe/",
    svg: <FaLinkedin />,
  },
  {
    id: 3,
    title: "Dylan Pina's Discord Profile",
    link: "https://discord.com/users/330155644743057408",
    svg: <FaDiscord />,
  },
  {
    id: 4,
    title: "Dylan Pina's Gmail",
    link: "mailto:dylansp.dev@gmail.com",
    svg: <IoIosMail />,
  },
];

export default SocialLinks;
