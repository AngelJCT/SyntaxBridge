import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#eceff2] to-[#8197a8] via-[#d5dde2] dark:bg-gradient-to-b dark:from-[#0f0f12] dark:via-[#1d1f25] dark:to-[#393d41] py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary text-[20px] hover:text-white dark:hover:text-background transition-all"
          />
          {/* copyright */}
          <div className="text-center text-muted-foreground mt-8 xs:text-sm">
            <p>
              © 2024 - {new Date().getFullYear()} -{" "}
              <span className="">Angel J. Carrion</span>
            </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
