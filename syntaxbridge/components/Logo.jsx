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
  const currentTheme = resolvedTheme || "light";

  return (
    <Link href="/">
      <h1 className="bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent font-semibold hover:underline tracking-[1px] cursor-pointer">
        <Image
          src={
            currentTheme === "light"
              ? "/SVG/logo_light.svg"
              : "/SVG/logo_dark.svg"
          }
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
          priority
        />
      </h1>
    </Link>
  );
};

export default Logo;
