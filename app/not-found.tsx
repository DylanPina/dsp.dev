"use client";

import type { NextPage } from "next";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import FooterSection from "@/sections/FooterSection";
import StyledLink from "@/components/StyledLink";

const Home: NextPage = () => {
	const pathname = usePathname();
	const [redirectPath, setRedirectPath] = useState("/");

	useEffect(() => {
		// Check if the current path contains "/blog" on the client side
		const isBlogPage = pathname?.includes("/blog");
		setRedirectPath(isBlogPage ? "/blog" : "/");
	}, [pathname]);

	return (
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
						<StyledLink href={redirectPath} className="text-lg">
							Go back
						</StyledLink>
					</div>
				</div>
				<FooterSection
					text={
						<span className="text-primary-white text-xs md:text-sm">
							Developed in{" "}
							<a
								className="underline text-lavender hover:font-bold cursor-pointer"
								href="https://github.com/DylanPina/neovim-config"
							>
								neovim
							</a>{" "}
							btw
						</span>
					}
					animationDelay={1}
					animationDuration={1}
				/>
			</div>
		</div>
	);
};

export default Home;
