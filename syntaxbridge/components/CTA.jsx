"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2, // Adjust duration for slower animation
      },
    },
  }

  return (
    <motion.section
      className="py-12 flex xl:py-[200px] xs:h-[100hv] mb-12 xl:mb-0"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="container mx-auto w-full xs:px-[1rem]">
        <div className="relative z-1 max-w-[70rem] mx-auto text-center mb-6 lg:mb-12">
          <h2 className="text-[1.5rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl mx-auto mb-6 tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Start Bridging the Syntax Divide Today
          </h2>
          <div className="cta-container">
            <p className="sm:text-base xs:text-sm md:text-lg lg:text-xl xl:text-2xl md:max-w-3xl sm:max-w-lg mx-auto xs:mb-6 text-gray-600 dark:text-gray-400">
              Ready to simplify your coding experience? Join SyntaxBridge now
              to streamline learning and mastering multiple languages. Start for free and unlock powerful code comparison and assistance today!
            </p>

            <Link href="sign-up">
              <Button className="gap-x-2 bg-[#26292b] dark:bg-[#f7f8f8] text-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
