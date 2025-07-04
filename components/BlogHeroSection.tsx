import React from "react";

import { useFilter } from "context/filter";

const BlogHeroSection: React.FC = () => {
  const { searchText, onSearch } = useFilter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <section
      className="flex flex-col gap-4 py-4 pt-20 md:pt-24 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto"
    >
      <h1 className="main-header text-4xl lg:text-5xl text-center font-bold">
        Blog
      </h1>
      <label className="relative block my-4">
        <input
          className="placeholder:italic placeholder:text-opacity-75 py-3 pr-14 pl-5 
                    block bg-cardlight dark:bg-carddark w-full rounded shadow-md
                    border border-cardlight dark:border-carddark border-opacity-40 
                    focus:outline-none focus:border-marrslight focus:dark:border-carrilight"
          placeholder="Search for anything..."
          type="text"
          name="search"
          defaultValue={searchText}
          onChange={handleSearch}
          autoComplete="off"
          autoFocus
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-5 opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden="true"
            className="fill-primary-white"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </span>
      </label>
    </section>
  );
};

export default BlogHeroSection;
