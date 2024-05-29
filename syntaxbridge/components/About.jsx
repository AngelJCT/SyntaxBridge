"use client"

import { Code } from "lucide-react";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeOpacity={0.5}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const About = () => {
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
  };

  return (
    <motion.section
      className="py-12 xl:py-[150px] xl:h-[65vh] xs:h-[100hv]"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="container mx-auto w-full xs:px-[1rem]">
        <div className="relative">
          <div className="gradient-ball-1 -z-10 absolute lg:top-[25rem] md:top-[40rem] xs:top-[83rem] sm:top-[75rem]"></div>
          <div className="gradient-ball-2 -z-10 absolute md:top-[8rem] xs:top-[6rem]"></div>
        </div>
        
        {/* <div className="gradient-ball-3 -z-10 absolute md:top-[17rem] xs:top-[50rem] xs:right-[80px] sm:right-[230px] md:right-[600px]"></div> */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-[1.5rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl mx-auto mb-6 tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Navigate New Programming Languages Effortlessly
          </h2>
        </div>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Compare Code Side-by-Side",
              description: "Visualize differences and similarities in syntax across multiple programming languages with our intuitive side-by-side display."
            },
            {
              title: "Choose from a Dozen Languages",
              description: "Access a diverse library of 12 popular programming languages, enabling you to learn and compare their syntax effectively."
            },
            {
              title: "Your AI Coding Assistant",
              description: "Leverage artificial intelligence to get real-time suggestions, corrections and explanations to enhance your coding skills."
            },
            {
              title: "Insights into Every Programming Concept",
              description: "Gain comprehensive insights and detailed explanations for a wide range of programming concepts to deepen your understanding."
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="justify-center absolute bottom-0">
                <CodeIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
