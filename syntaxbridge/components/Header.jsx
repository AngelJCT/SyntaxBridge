"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { ThemeToggler } from "./ThemeToggler";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { useStateContext } from "@/context/StateContext";

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

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  const { selectedConcept, handleConceptClick } = useStateContext();
  

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollYPos);
    };
  });

  return (
    <header
      className={`${
        header
          ? "py-2 bg-[#eceff2] shadow-xl dark:shadow-none dark:bg-[#0f0f12] border-b dark:border-gray-700"
          : "py-3 bg-[#eceff2] dark:bg-[#0f0f12] border-b dark:border-gray-700"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Navbar
              containerStyles="hidden lg:flex gap-x-8 items-center tracking-[1px] text-primary"
              linkStyles="relative transition-all"
              underlineStyles="absolute w-full h-[2px] bg-primary top-full left-0"
            />
            <ThemeToggler />

            {/* mobile nav */}
            <div className="lg:hidden">
              <MobileNav selectedConcept={selectedConcept} handleConceptClick={handleConceptClick} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
