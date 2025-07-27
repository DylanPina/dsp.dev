"use client";

import type { NextPage } from "next";
import { useFilter } from "context/filter";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogCard from "@/components/blog/BlogCard";
import { useEffect, useState } from "react";

interface Post {
	slug: string;
	title: string;
	excerpt: string;
	datetime: string;
}

const Blog: NextPage = () => {
	const { searchText } = useFilter();
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		fetch("/blog/posts.json")
			.then((res) => res.json())
			.then((data) => setPosts(data.posts));
	}, []);

	const filteredPosts = posts.filter(({ title }) =>
		title.toLowerCase().includes(searchText?.toLowerCase() ?? ""),
	);

	return (
		<div className="bg-bglight dark:bg-bgdark">
			<main id="main" className="mb-20">
				<BlogHeroSection />
				<div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
					<h2 className="text-2xl font-medium mb-4">
						{searchText === "" && "All Posts"}
						{searchText !== "" && <div>Search result(s)</div>}
					</h2>
					<ul>
						{filteredPosts.map((post: Post) => (
							<BlogCard post={post} key={post.slug} />
						))}
						{filteredPosts.length === 0 && (
							<span className="text-center text-lg font-medium opacity-50 italic">
								null
							</span>
						)}
					</ul>
				</div>
			</main>
		</div>
	);
};

export default Blog;
