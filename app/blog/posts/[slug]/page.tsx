import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

// Add import for CustomMarkdown
import CustomMarkdown from "@/components/blog/CustomMarkdown";
import Image from "next/image";

interface Post {
	slug: string;
	title: string;
	excerpt: string;
	datetime: string;
	content?: string;
	markdown?: string;
	markdownFile?: string;
	bannerImage?: string; // Add bannerImage field
}

interface BlogPostPageProps {
	params: Promise<{
		slug: string;
	}>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
	try {
		const postsPath = path.join(process.cwd(), "public", "blog", "posts.json");
		const postsData = JSON.parse(fs.readFileSync(postsPath, "utf8"));

		return postsData.posts.map((post: Post) => ({
			slug: post.slug,
		}));
	} catch (error) {
		console.error("Error generating static params:", error);
		return [];
	}
}

async function getPost(slug: string): Promise<Post | null> {
	try {
		// Validate slug parameter
		if (!slug || typeof slug !== "string") {
			console.error("Invalid slug parameter:", slug);
			return null;
		}

		const postsPath = path.join(process.cwd(), "public", "blog", "posts.json");

		// Check if posts.json file exists
		if (!fs.existsSync(postsPath)) {
			console.error("Posts file not found:", postsPath);
			return null;
		}

		const postsData = JSON.parse(fs.readFileSync(postsPath, "utf8"));

		// Validate posts data structure
		if (!postsData.posts || !Array.isArray(postsData.posts)) {
			console.error("Invalid posts data structure");
			return null;
		}

		const post = postsData.posts.find((p: Post) => p.slug === slug);

		if (!post) {
			console.warn(
				`Post with slug "${slug}" not found. Available slugs:`,
				postsData.posts.map((p: Post) => p.slug)
			);
		}

		return post || null;
	} catch (error) {
		console.error("Error reading posts:", error);
		return null;
	}
}

async function getMarkdown(slug: string): Promise<string | null> {
	try {
		const markdownFile = path.join(
			process.cwd(),
			"public",
			"blog",
			"markdown",
			slug + ".md"
		);

		return fs.readFileSync(markdownFile, "utf8");
	} catch (error) {
		console.error("Error reading markdown file:", error);
		return null;
	}
}

async function getBannerImage(slug: string): Promise<string | null> {
	try {
		const bannerImage = path.join(
			process.cwd(),
			"public",
			"blog",
			"images",
			"banners",
			slug + "-banner.jpg"
		);

		return fs.existsSync(bannerImage) ? bannerImage : null;
	} catch (error) {
		console.error("Error reading banner image:", error);
		return null;
	}
}

const BlogPostPage: React.FC<BlogPostPageProps> = async ({ params }) => {
	// Await the params promise
	const resolvedParams = await params;

	// Validate params
	if (!resolvedParams || !resolvedParams.slug) {
		console.error("Missing slug parameter");
		notFound();
	}

	const post = await getPost(resolvedParams.slug);

	if (!post) {
		console.error(`Blog post not found for slug: ${resolvedParams.slug}`);
		notFound();
	}

	const markdown = await getMarkdown(resolvedParams.slug);

	if (!markdown) {
		console.error(`Markdown file not found for slug: ${resolvedParams.slug}`);
		notFound();
	}

	const bannerImage = await getBannerImage(resolvedParams.slug);

	return (
		<div className="bg-bglight dark:bg-bgdark min-h-screen">
			<div className="px-4 sm:px-8 md:px-20 max-w-5xl mx-auto pt-20 md:pt-24">
				<header className="flex flex-col gap-4 w-full">
					{bannerImage && (
						<div className="w-full flex justify-center">
							<Image
								src={"/blog/images/banners/" + post.slug + "-banner.jpg"}
								alt={post.title + " banner"}
								width={900}
								height={350}
								className="rounded-lg shadow-md object-cover max-h-72 w-full"
								priority
							/>
						</div>
					)}
					<div className="flex flex-col gap-3">
						<h1 className="text-2xl md:text-4xl font-bold text-primary-white">
							{post.title}
						</h1>
						<div className="flex items-center gap-1 text-secondary-text text-sm">
							<span>Dylan Pina</span>
							<span className="mx-1">&middot;</span>
							<time>
								{new Date(post.datetime).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
									timeZone: "UTC",
								})}
							</time>
						</div>
					</div>
				</header>
				<hr className="border-t border-secondary-text/30 my-4" />

				<article className="prose prose-invert max-w-none">
					{markdown && <CustomMarkdown markdown={markdown} />}
				</article>
			</div>
		</div>
	);
};

export default BlogPostPage;
