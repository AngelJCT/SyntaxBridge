"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Programming concepts",
    path: "/",
  },
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === pathname && (
              <motion.span
                layoutId="underline"
                className={`${underlineStyles}`}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
