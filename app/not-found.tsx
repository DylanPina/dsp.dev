import type { NextPage } from "next";

import FooterSection from "@/sections/FooterSection";
import StyledLink from "@/components/StyledLink";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center items-center flex-col mt-auto">
            <h1 className="text-8xl xs:text-9xl font-bold text-marrsgreen dark:text-carrigreen">
              404
            </h1>
            <div className="text-lg xs:text-2xl my-2">
              Page Not Found :&apos;&#40;
            </div>
            <div className="max-w-xs text-center mt-2 mb-10">
              It seems the page you&apos;re looking for does not exist, or there
              might be a typo in the URL.
            </div>
            <div className="flex space-x-4">
              <StyledLink href="/" className="text-lg">
                Go back Home
              </StyledLink>
            </div>
          </div>
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default Home;
