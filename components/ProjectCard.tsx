import { ReactElement, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaGithub } from "react-icons/fa";

type Props = {
  index: number;
  project: {
    title: string;
    type: string;
    image: ReactElement;
    desc: string;
    tags: string[];
    liveUrl: string;
    codeUrl: string;
    bgColor: string;
    githubApi: string;
  };
};

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      q(".project-image"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      },
    )
      .fromTo(q(".project-text"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".project-desc"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%",
      )
      .fromTo(
        q(".project-tags"),
        { y: -40 },
        { y: 0, stagger: 0.1, ease: "Elastic.easeOut" },
        "<25%",
      );
  }, []);

  const [starCount, setStarCount] = useState();
  const [starCountUrl, setStarCountUrl] = useState();

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const response = await fetch(project.githubApi);
      const data = await response.json();
      const stargazersCount = data.stargazers_count;
      const stargazersUrl = data.stargazers_url;

      if (stargazersCount && stargazersUrl && !ignore) {
        setStarCount(stargazersCount);
        setStarCountUrl(stargazersUrl);
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [project.githubApi]);

  return (
    <div ref={sectionRef} className={`md:basis-1/2 md:px-8 py-2 md:py-4`}>
      <div className={`project-card project-card-${index}`}>
        <div className="overflow-hidden ">
          <div
            className={`project-image ${project.bgColor} relative rounded-lg`}
          >
            {project.image}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text flex items-center justify-between">
            <h3 className="text-lavender dark:text-lavender text-xl my-1 font-bold">
              {project.title}
            </h3>
            <div className="flex items-center space-x-5 sm:space-x-3 my-2 sm:my-0 mr-[0.1rem]">
              <a
                href={starCountUrl}
                target="_blank"
                rel="noreferrer"
                title={`Check stargazers of '${project.title}' on Github`}
                className="flex items-center group"
              >
                {starCount}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-75 group-hover:-rotate-12"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
              </a>
              <a
                href={project.codeUrl}
                title={`See '${project.title}' on Github`}
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-lavender dark:focus-visible:outline-lavender mr-1 rounded-full"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={project.liveUrl}
                title={`Demo for '${project.title}'`}
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-lavender dark:focus-visible:outline-lavender mr-8 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 scale-110 sm:scale-100 bg-cardlight dark:bg-carddark hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-1 hover:-rotate-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden md:min-h-[74px]">
          <p className="project-desc">{project.desc}</p>
        </div>
        <ul
          aria-label={`Tech Stack used in ${project.title}`}
          className={`flex flex-wrap mt-2 mb-4 md:mt-2 md:mb-6 text-sm overflow-hidden`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`project-tags mr-2 my-1 bg-lavender shadow-md text-primary-black font-bold py-1 px-2 rounded`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
