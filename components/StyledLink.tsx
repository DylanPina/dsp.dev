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
      "text-blue-600 hover:text-blue-800 hover:underline font-medium",
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export default StyledLink;
