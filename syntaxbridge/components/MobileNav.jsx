"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import { useStateContext } from "@/context/StateContext";

import Navbar from "./Navbar";
import CodeIcon from "@/utils/CodeIcon";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";


const concepts = [
  { name: "Loops", value: "loops" },
  { name: "If/Else", value: "if_else" },
  { name: "Variable Declaration", value: "variable_declaration" },
  { name: "Imports & Exports", value: "imports_exports" },
  { name: "Functions", value: "functions" },
  { name: "Classes", value: "classes" },
  { name: "Error Handling", value: "error_handling" },
  { name: "File I/O", value: "file_io" },
  { name: "Ternary Expression", value: "ternary_expression" },
  { name: "AI", value: "ai" },
];

const MobileNav = () => {
  const { selectedConcept, handleConceptClick } = useStateContext();
  const pathname = usePathname();

  const filteredConcepts = concepts.filter(concept => {
    if (pathname === "/syntaxbridgepage") {
      return true; // Show all concepts
    } else if (pathname === "/programming-concepts") {
      return concept.value !== "ai"; // Exclude the "AI" concept
    }
    return false;
  })
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-6 overflow-y-auto">
            <Logo />
            <Navbar
              containerStyles="flex flex-col items-center gap-y-4 bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent"
              linkStyles="sm:text-2xl xs:text-sm font-semibold tracking-[1px]"
            />
            {(pathname === "/syntaxbridgepage" || pathname === "/programming-concepts") && (
              filteredConcepts.map((concept) => (
                <Link
                  key={concept.name}
                  className="flex items-center gap-3 rounded-lg p-2 text-[18px] leading-[28px] text-gray-700 transition-all hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
                  href="#"
                  onClick={() => handleConceptClick(concept.value)}
                >
                  <CodeIcon className="h-5 w-5" />
                  {concept.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
