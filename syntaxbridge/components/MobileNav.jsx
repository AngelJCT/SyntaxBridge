import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Link from "next/link";

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

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-8">
            <Logo />
            <Navbar
              containerStyles="flex flex-col items-center gap-y-6 bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:text-gray-200 bg-clip-text text-transparent"
              linkStyles="text-2xl font-semibold tracking-[1px]"
            />
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-600"
              href="#"
            >
              <CodeIcon className="h-5 w-5" />
              Loops
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              href="#"
            >
              <CodeIcon className="h-5 w-5" />
              If/Else
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              href="#"
            >
              <CodeIcon className="h-5 w-5" />
              Variable Declaration
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              href="#"
            >
              <CodeIcon className="h-5 w-5" />
              Imports & Exports
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              href="#"
            >
              <CodeIcon className="h-5 w-5" />
              Functions
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              href="#"
            >
              <CodeIcon className="h-5 w-5" />
              Classes
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              href="#"
            >
              <CodeIcon className="h-5 w-5" />
              AI
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
