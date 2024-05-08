import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  /* {
    path: '/',
    name: <RiYoutubeFill/>
  }, */
  {
    path: "https://www.linkedin.com/in/angel-carrion/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/AngelJCT",
    name: <RiGithubFill />,
  },
  /* {
    path: '/',
    name: <RiFacebookFill/>
  }, */
  /* {
    path: '/',
    name: <RiInstallFill/>
  }, */
  {
    path: "https://www.instagram.com/angeljct/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${iconStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
