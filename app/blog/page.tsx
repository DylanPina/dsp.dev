"use client";

import type { NextPage } from "next";
import { useFilter } from "context/filter";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogCard from "@/components/blog/BlogCard";

const Blog: NextPage = () => {
  const { searchText } = useFilter();

  const posts = [
    {
      slug: "test",
      title: "Test",
      excerpt: "Test",
      datetime: "2024-01-15T14:30:00Z",
    },
  ];

  return (
    <div className="bg-bglight dark:bg-bgdark">
      <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
        <main id="main" className="mb-20">
            <BlogHeroSection />
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-2">
                {searchText === "" && "All Posts"}
                {searchText !== "" && <div>Search result(s)</div>}
              </h2>
              <ul>
                {posts
                  .filter(({ title }) =>
                    title.toLowerCase().includes(searchText?.toLowerCase() ?? "")
                  )
                  .map((post) => (
                    <BlogCard post={post} key={post.slug} />
                  ))}
              </ul>
            </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
