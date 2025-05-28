import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  edu: {
    id: number;
    title: string;
    place: string;
    time: string;
    bullets: string[];
  };
};

const ExperienceGroup: React.FC<Props> = ({ edu }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `50% bottom`,
      },
    });

    tl.fromTo(
      q(".edu-heading"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      },
    )
      .fromTo(
        q(".edu-info"),
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "<25%",
      )
      .fromTo(
        q(".edu-list"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "<10%",
      );
  }, []);

  return (
    <div className="edu-group mb-4" ref={sectionRef}>
      <div className="overflow-hidden">
        <h3
          className={`edu-heading text-lavender text-lg md:text-xl font-bold`}
        >
          {edu.title}
        </h3>
      </div>
      <div className="max-sm:flex flex-col text-md md:text-lg overflow-hidden edu-info text-subtext">
        <span>{edu.place}</span> <span className="max-sm:hidden">{` | `}</span>
        <span>{edu.time}</span>
      </div>
      <ul
        role="list"
        className=" marker:text-lavender list-disc pl-6 space-y-1 mt-1"
      >
        {edu.bullets.map((li) => (
          <li key={li} className={`edu-list text-base/7`}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceGroup;
