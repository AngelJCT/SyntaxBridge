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
            <Link href="/programming-concepts" className={`capitalize ${linkStyles}`}>
              Programming Concepts
            </Link>
          ) : (
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
          )
        );
      })}
      {isSignedIn ? (
        <>
          <SignOutButton onSignOut={handleSignOut} className={`capitalize ${linkStyles}`} >
            Log out
          </SignOutButton>
          <Link href="/syntaxbridgepage" className={`capitalize ${linkStyles}`}>
            App
          </Link>
        </>
        ) : (
        <Link href="/sign-in" className={`capitalize ${linkStyles}`}>
          Log in
        </Link>
        )}
    </nav>
  );
};

export default Navbar;
