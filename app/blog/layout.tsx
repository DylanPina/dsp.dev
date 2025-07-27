"use client";

import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import FooterSection from "@/sections/FooterSection";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ProvideFilter } from "context/filter";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const headerTitle = (
	<Link
		href="/blog"
		className="text-primary-white text-xl hover:font-semibold sm:text-2xl hover:text-shadow-primary-white hover:text-shadow-lavender transition duration-700 ease-in-out "
	>
		dsp
		<span className="text-lavender">.dev</span>/blog
	</Link>
);

const navLinks = [
	{
		url: "/",
		text: "Portfolio",
		svg: <FaHome />,
	},
];

const footerText = (
	<Link
		href="/"
		className="font-bold text-lavender hover:font-black hover:underline cursor-pointer"
	>
		dylansp.dev
	</Link>
);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="bg-primary-black overflow-hidden min-h-screen flex flex-col">
					<div className="selection:lavender flex flex-col min-h-screen">
						<Header navLinks={navLinks} title={headerTitle} mobileNav={false} />
						<main id="main" className="flex-1">
							<ProvideFilter>{children}</ProvideFilter>
						</main>
						<FooterSection
							text={footerText}
							animationDelay={0.1}
							animationDuration={0.5}
						/>
					</div>
				</div>
			</body>
		</html>
	);
}
