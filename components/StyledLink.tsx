import React from "react";
import clsx from "clsx";

const StyledLink = ({
  href,
  className,
  children,
  ...props
}: React.ComponentProps<"a">) => (
  <a
    href={href}
    className={clsx(
      "underline text-lavender hover:font-bold cursor-pointer",
      className,
    )}
    {...props}
  >
    {children}
  </a>
);


export default StyledLink;
