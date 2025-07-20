"use client";

import SocialLinks from "@/components/SocialLinks";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Props {
	text: React.ReactNode;
	animationDelay?: number;
	animationDuration?: number;
	mobilePadding?: boolean;
}

const Footer: React.FC<Props> = ({
	text,
	animationDelay,
	animationDuration,
	mobilePadding,
}) => {
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
			}
		);
	}, [animationDelay, animationDuration]);

	return (
		<footer
			className={`flex flex-col gap-4 justify-center p-4 pb-[60px] text-center mt-auto ${
				mobilePadding && "max-md:pb-[120px]"
			}`}
			ref={containerRef}
		>
			<SocialLinks
				animationDelay={animationDelay ?? 0}
				animationDuration={animationDuration ?? 0}
			/>
			<div className="text-primary-white text-xs md:text-sm">{text}</div>
		</footer>
	);
};

export default Footer;
