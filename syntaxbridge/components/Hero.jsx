"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.6,
        duration: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.7 } },
  };

  return (
    <section className="z-10 py-12 xl:py-[100px] xs:h-[100hv] mb-12 xl:mb-0 bg-gradient-to-b from-[#eceff2] via-[#d5dde2] to-[#8197a8] dark:bg-gradient-to-b dark:from-[#0f0f12] dark:via-[#1d1f25] dark:to-[#393d41] md:rounded-b-[130px] sm:rounded-b-[100px] xs:rounded-b-[70px] shadow-2xl drop-shadow-lg dark:shadow-none">
      <div className="container mx-auto w-full xs:px-[1rem]">
        <motion.div
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-8 md:mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="mb-4 xl:p-2 font-bold text-[2rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[5rem] xl:leading-[5rem] bg-gradient-to-l from-[#5c656d] to-[#26292b] tracking-[2px] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent"
            variants={itemVariants}
          >
            Syntax<span className="font-normal">Bridge</span>
          </motion.h1>
          <motion.h2
            className="text-[1.4rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl mx-auto mb-6 tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent"
            variants={itemVariants}
          >
            Cross the Syntax Divide
          </motion.h2>
          <motion.p
            className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 md:max-w-3xl sm:max-w-lg mx-auto sm:mb-8 xs:mb-6 text-gray-600 dark:text-gray-300/80"
            variants={itemVariants}
          >
            SyntaxBridge streamlines your coding journey by providing a powerful
            tool for comparing and understanding the syntax across different
            programming languages. Designed to help both novice and seasoned
            developers, it simplifies the process of learning new languages and
            enhances coding efficiency by bridging the syntax divide.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex mx-auto items-center justify-center"
            variants={itemVariants}
          >
            <Link href="sign-up">
              <Button className="bg-[#26292b] dark:bg-[#f7f8f8] text-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300 shadow-sm dark:shadow-none">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Code Snippets Containers */}
        <motion.div
          className="flex flex-col xl:flex-row gap-x-3 gap-y-5 xl:gap-y-0 items-center mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {["Python", "C", "JavaScript", "Rust"].map((lang, index) => (
            <motion.div
              key={index}
              className={`${lang.toLowerCase()}-container py-3 px-3 text-center items-center justify-center text-[#26292b] dark:text-[#f7f8f8] flex-auto`}
              variants={itemVariants}
            >
              <h3 className="font-semibold xs:text-sm xl:text-lg sm:text-base mb-3">{lang}</h3>
              <pre className="font-mono xs:text-[12px] xl:text-lg md:text-base text-gray-600 dark:text-gray-300/80">
                {lang === "Python" && 'print("Hello, World!")'}
                {lang === "C" && 'printf("Hello, World!");'}
                {lang === "JavaScript" && 'console.log("Hello, World!");'}
                {lang === "Rust" && 'println!("Hello, World!");'}
              </pre>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
