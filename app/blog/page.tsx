"use client";
import type { NextPage } from "next";

import { useFilter } from "context/filter";
import Loader from "@/components/Loader";
import BlogHeroSection from "@/components/BlogHeroSection";
import BlogCard from "@/components/BlogCard";

const Blog: NextPage = () => {
  const { searchText } = useFilter();
  const posts = [] as any[];

  return (
    <>
      <Loader>Dev Blog</Loader>
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <main id="main" className="mb-20">
            <BlogHeroSection />
            {searchText === "" && (
              <>
                <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-medium mb-2">Featured Posts</h2>
                  <ul>
                    {posts.map(
                      (post) =>
                        post.featured && (
                          <BlogCard post={post} key={post.slug} />
                        )
                    )}
                  </ul>
                </div>
                <hr
                  aria-hidden="true"
                  className="mx-4 sm:mx-20 md:mx-auto max-w-xl lg:max-w-2xl my-6"
                />
              </>
            )}
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-2">
                {searchText === "" && "All Posts"}
                {searchText !== "" && <div>Search result(s)</div>}
              </h2>
              <ul>
                {posts
                  .filter(({ title }) =>
                    title.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .map((post) => (
                    <BlogCard post={post} key={post.slug} />
                  ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Blog;
