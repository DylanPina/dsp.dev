import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CustomMarkdownProps {
	markdown: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ markdown }) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				h1: (props) => (
					<h1
						className="text-4xl font-bold text-primary-white my-6"
						{...props}
					/>
				),
				h2: (props) => (
					<h2
						className="text-2xl font-semibold text-primary-white my-4"
						{...props}
					/>
				),
				h3: (props) => (
					<h3
						className="text-xl font-semibold text-primary-white my-4"
						{...props}
					/>
				),
				h4: (props) => (
					<h4
						className="text-lg font-semibold text-primary-white my-4"
						{...props}
					/>
				),
				code: ({ className, children, ...props }) => {
					const match = /language-(\w+)/.exec(className || "");
					return match ? (
						<SyntaxHighlighter
							style={dracula}
							language={match[1]}
							PreTag="div"
							customStyle={{ borderRadius: "0.5rem", margin: "1em 0" }}
							{...Object.fromEntries(
								Object.entries(props).filter(([k]) => k !== "ref")
							)}
						>
							{String(children).replace(/\n$/, "")}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					);
				},
				img: ({ src = "", alt = "", width, height, ...props }) => {
					// Ensure src is a string and width/height are numbers for Next.js Image
					const imgSrc = typeof src === "string" ? src : "";
					const imgWidth = typeof width === "number" ? width : 800;
					const imgHeight = typeof height === "number" ? height : 400;
					return (
						<Image
							src={imgSrc}
							alt={alt || ""}
							width={imgWidth}
							height={imgHeight}
							className="rounded shadow-md my-4 max-w-full h-auto"
							style={{ width: "100%", height: "auto" }}
							{...props}
						/>
					);
				},
				p: (props) => (
					<p
						className="my-4 leading-relaxed text-primary-white text-md"
						{...props}
					/>
				),
				ul: (props) => (
					<ul className="list-disc pl-6 my-4 text-primary-white" {...props} />
				),
				ol: (props) => (
					<ol
						className="list-decimal pl-6 my-4 text-primary-white"
						{...props}
					/>
				),
				li: (props) => <li className="mb-1" {...props} />,
			}}
		>
			{markdown}
		</ReactMarkdown>
	);
};

export default CustomMarkdown;
