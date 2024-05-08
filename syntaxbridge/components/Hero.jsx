import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="z-10 py-12 xl:py-24 sm:h-[65vh] xs:h-[100hv] xl:pt-[200px] lg:pt-[70px] sm:pt-[100px] bg-gradient-to-b from-[#eceff2] via-[#d5dde2] to-[#8197a8] dark:bg-gradient-to-b dark:from-[#0f0f12] dark:via-[#1d1f25] dark:to-[#393d41] rounded-b-[130px] shadow-2xl drop-shadow-lg dark:shadow-none">
      <div className="container xs:px-[1rem] mx-auto relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-8 md:mb-10">
          <h1 className="mb-4 xl:p-2 font-bold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[5rem] xl:leading-[5rem] bg-gradient-to-l from-[#5c656d] to-[#26292b] tracking-[2px] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Syntax<span className="font-normal">Bridge</span>
          </h1>
          <h2 className="text-[1.5rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl mx-auto mb-6 tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Cross the Syntax Divide
          </h2>
          <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 md:max-w-3xl sm:max-w-lg mx-auto sm:mb-8 xs:mb-6 text-gray-600 dark:text-gray-400">
            SyntaxBridge streamlines your coding journey by providing a powerful
            tool for comparing and understanding the syntax across different
            programming languages. Designed to help both novice and seasoned
            developers, it simplifies the process of learning new languages and
            enhances coding efficiency by bridging the syntax divide.
          </p>

          <Button className="gap-x-2 bg-[#26292b] dark:bg-[#f7f8f8] text-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200">
            Get Started
          </Button>
        </div>

        {/* Left lines */}
        {/* <div className="gap-x-[3px] flex flex-row">
          {Array.from({ length: 70 }).map((_, index) => (
            <div
              key={index}
              className="hidden xl:block left-full w-[5px] h-[5px] border-b border-[#26292b47] dark:border-[#b7bdc247] mb-8 md:mb-10 shadow-md"
            ></div>
          ))}
        </div> */}

        {/* Code Snippets Containers */}
        <div className="flex flex-col xl:flex-row gap-x-3 gap-y-5 xl:gap-y-0 items-center mb-10 sm:mb-0">
          <div className="python-container py-3 px-3 text-center items-center justify-center text-[#26292b] dark:text-[#f7f8f8]">
            <h3 className="font-semibold xs:text-sm sm:text-lg mb-3">Python</h3>
            <pre className="font-mono xs:text-sm sm:text-lg text-gray-600 dark:text-gray-400">
              print("Hello, World!")
            </pre>
          </div>
          <div className="java-container py-3 px-3 text-center items-center justify-center text-[#26292b] dark:text-[#f7f8f8]">
            <h3 className="font-semibold xs:text-sm sm:text-lg mb-3">Java</h3>
            <pre className="font-mono xs:text-sm sm:text-lg text-gray-600 dark:text-gray-400">
              System.out.println("Hello, World!");
            </pre>
          </div>
          <div className="javascript-container py-3 px-3 text-center items-center justify-center text-[#26292b] dark:text-[#f7f8f8]">
            <h3 className="font-semibold xs:text-sm sm:text-lg mb-3">
              JavaScript
            </h3>
            <pre className="font-mono xs:text-sm sm:text-lg text-gray-600 dark:text-gray-400">
              console.log("Hello, World!");
            </pre>
          </div>
          <div className="rust-container py-3 px-3 text-center items-center justify-center text-[#26292b] dark:text-[#f7f8f8]">
            <h3 className="font-semibold xs:text-sm sm:text-lg mb-3">Rust</h3>
            <pre className="font-mono xs:text-sm sm:text-lg text-gray-600 dark:text-gray-400">
              println!("Hello, World");
            </pre>
          </div>
        </div>

        {/* Right lines */}
        {/* <div className="gap-x-1 flex flex-row absolute right-4">
          {Array.from({ length: 65 }).map((_, index) => (
            <div
              key={index}
              className="hidden xl:block w-[5px] h-[5px] border-b border-[#26292b47] dark:border-[#b7bdc247] mt-8 md:mt-10 shadow-md"
            ></div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
