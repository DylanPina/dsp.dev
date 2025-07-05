"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ToastContainer, toast, Bounce } from "react-toastify";

import useScrollListener from "hooks/useScrollListener";
import { useSection } from "context/section";

interface Props {
  title: React.ReactNode
  navLinks?: {
    url: string;
    svg: React.ReactNode;
    text: string;
  }[]
  animationDelay?: number
  animationDuration?: number
}

const Header: React.FC<Props> = ({title, navLinks = [], animationDelay, animationDuration}) => {
  const { currentSection } = useSection();
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();

  const mainRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { top: -120 },
      { top: 0, duration: animationDuration ?? 0, delay: animationDelay ?? 0, ease: "Power0.easeNone" },
    );
  }, [animationDelay, animationDuration]);

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("!shadow-lg");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <header className="md:flex">
      <ToastContainer />
      <div
        ref={mainRef}
        className={`main-nav bg-primary-black/95 z-30 top-0 fixed duration-400 px-4 sm:px-8 h-16 w-full ${navClassList.join(
          " ",
        )}`}
      >
        <div className="w-full h-full mx-auto max-w-6xl flex items-center justify-between">
          {title}
          <nav className="flex items-center">
            <div className="bg-primary-black/95 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none fixed md:static bottom-4 z-30 left-1/2 md:left-auto transform max-md:-translate-x-1/2 md:transform-none bg-bglight dark:bg-carddark dark:text-primary-white w-11/12 rounded drop-shadow-lg">
              <ul className="flex justify-evenly items-center py-1 text-primary-white">
                {navLinks.map((navLink) => (
                  <li key={navLink.url}>
                    <a
                      href={navLink.url}
                      className={`text-sm md:text-lg flex flex-col items-center w-[4.5rem] md:w-auto dark:fill-primary-white md:mr-6 md:hover:text-lavender md:dark:hover:text-lavender link-outline ${currentSection === navLink.text.toLocaleLowerCase() &&
                        "text-lavender dark:text-lavender fill-lavender dark:fill-lavender"
                        }`}
                    >
                      <span className="md:hidden fill-primary-white hover:fill-primary-lavender">
                        {navLink.svg}
                      </span>
                      <span className="whitespace-nowrap">{navLink.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() =>
                toast.error("Light mode? Seriously? 🤨", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                })
              }
              title="Toggles light & dark theme"
              aria-live="polite"
              className="w-8 h-8 ml-1 rounded-lg flex justify-center items-center link-outline cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-primary-white hidden dark:inline-block transform scale-110 md:dark:hover:fill-lavender"
              >
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="dark:hidden transform scale-90 md:hover:fill-lavender"
              >
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
