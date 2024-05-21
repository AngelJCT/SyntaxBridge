"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useAuth, SignOutButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const links = [
  {
    name: "Blog",
    path: "/",
  },
];

const Navbar = ({
  containerStyles,
  linkStyles,
  underlineStyles
}) => {
  const pathname = usePathname();
  const { isSignedIn } = useAuth(); // Get the user's authentication status

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/"; // Redirect to home page after sign out
  };


  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          pathname === "/syntaxbridgepage" ? (
            <Link href="/programming-concepts" className={`capitalize ${linkStyles} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-[#f7f8f8]`}>
              Programming Concepts
            </Link>
          ) : (
            <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-[#f7f8f8]`}
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
          )
        );
      })}
      {isSignedIn ? (
        <>
          {pathname === "/" && (
            <Link href="/syntaxbridgepage" className={`capitalize ${linkStyles} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-[#f7f8f8]`}>
              Playground
            </Link>
          )}
          <SignOutButton onSignOut={handleSignOut} className={`${linkStyles} dark:text-[#f7f8f8] text-[#26292b] rounded-full border border-[#26292b15] dark:border-[#b7bdc220] py-2 px-6 hover:bg-gray-300 dark:hover:bg-gray-600`} >
            Log out
          </SignOutButton>
          
        </>
        ) : (
        <Link href="/sign-in" className={`capitalize ${linkStyles} rounded-full border border-[#26292b15] dark:border-[#b7bdc220] py-2 px-6 hover:bg-gray-300 dark:hover:bg-gray-600`}>
          Log in
        </Link>
        )}
    </nav>
  );
};

export default Navbar;
