import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const Logo = () => {
  const { theme, resolvedTheme } = useTheme();

  // Use resolvedTheme if available, otherwise default to 'light'
  const currentTheme = resolvedTheme || "dark";

  return (
    <Link href="/">
      
        <Image
          src={
            currentTheme === "light"
              ? "/SVG/logo2_light.svg"
              : "/SVG/logo2_dark.svg"
          }
          alt="logo"
          width={40}
          height={40}
          className="cursor-pointer"
          priority
        />
    </Link>
  );
};

export default Logo;
