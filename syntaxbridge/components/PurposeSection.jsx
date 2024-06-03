"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PurposeSection = () => {
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
        className="py-12 flex xl:py-[130px] lg:py-[90px] xs:h-[100hv] mb-12 xl:mb-0 items-center bg-opacity-15 dark:bg-opacity-20"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
    >
        <div className='container mx-auto w-full xs:px-[1rem]'>
          <div className='relative'>
            <div className="gradient-ball-purpose -z-10 absolute xl:top-[9rem] lg:top-[5rem] md:top-[1rem] xs:top-[4rem] sm:top-[2rem] xl:left-[500px] lg:left-[300px] md:left-[170px] sm:left-[130px] xs:left-[1px]"></div>
          </div>
            
            <div className="relative z-1 max-w-[62rem] mx-auto text-left mb-8 md:mb-12">
                <h2 className="text-[1.5rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl mx-auto tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
                    Mission
                </h2>
            </div>
            <div className='mission-card relative max-w-[766px] mx-auto text-left mb-8 md:mb-12'>
                <p className="sm:text-base xs:text-sm md:text-lg lg:text-xl xl:text-2xl md:max-w-3xl sm:max-w-lg mx-auto text-gray-600 dark:text-gray-300/80">
                    Our mission at SyntaxBridge is to empower developers by simplifying the transition between different programming languages. We strive to provide a seamless and efficient platform for learning, comparing, and adapting to new syntaxes, enabling developers to focus on their tasks and excel in their careers without the barriers of language differences.
                </p>
            </div>
            <div className="relative z-1 max-w-[62rem] mx-auto text-right mb-8 md:mb-12">
                <h2 className="text-[1.5rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl mx-auto tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
                    Vision
                </h2>
            </div>
            <div className='vision-card relative max-w-[766px] mx-auto text-left xs:mb-5'>
                <p className="sm:text-base xs:text-sm md:text-lg lg:text-xl xl:text-2xl md:max-w-3xl sm:max-w-lg mx-auto text-gray-600 dark:text-gray-300/80">
                Our vision is to create a world where programming language barriers are non-existent, allowing developers to effortlessly switch between languages and tools. We aim to be the leading platform for syntax comparison and adaptation, fostering a community of versatile and skilled developers who can meet diverse job requirements with confidence and efficiency.
                </p>
            </div>
        </div>
    </motion.section>
  )
}

export default PurposeSection