import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-12 xl:py-[270px] lg:py-[220px] md:py-[50px] xl:h-[65vh] lg:h-[50vh] xs:h-[100hv]">
      <div className="container mx-auto xs:px-[1rem] relative">
        <div className="relative z-1 max-w-[70rem] mx-auto text-center mb-6 lg:mb-12">
          <h2 className="text-[1.5rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl mx-auto mb-6 tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Start Bridging the Syntax Divide Today
          </h2>
          <div className="cta-container">
            <p className="sm:text-base xs:text-sm md:text-lg lg:text-xl xl:text-2xl md:max-w-3xl sm:max-w-lg mx-auto xs:mb-6 text-gray-600 dark:text-gray-400">
              Ready to simplify your coding experience? Join SyntaxBridge now
              and streamline your learning curve across multiple programming
              languages. Whether you are starting your coding journey or looking
              to expand your language expertise, SyntaxBridge is here to help.
              Get started for free and unlock the full potential of code
              comparison and assistance!
            </p>

            <Button className="gap-x-2 bg-[#26292b] dark:bg-[#f7f8f8] text-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
