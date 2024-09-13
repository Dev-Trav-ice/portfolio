import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { TbArrowsCross } from "react-icons/tb";

export const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contacts",
  },
];

export const skills = [
  {
    label: "UI/UX",
    description: "I am very familiar in this filed",
    icon: (
      <TbArrowsCross
        size={100}
        className="text-[#bcc6cc] group-hover:text-yellow-500 transition ease-in duration-300"
      />
    ),
  },
  {
    label: "React",
    description: "I am very familiar in this filed",
    icon: (
      <FaReact
        size={100}
        className="text-[#bcc6cc] group-hover:text-blue-800 transition ease-in duration-300"
      />
    ),
  },
  {
    label: "tailwind-css",
    description: "I am very familiar in this filed",
    icon: (
      <RiTailwindCssFill
        className="text-[#bcc6cc] group-hover:text-blue-400 transition ease-in duration-300"
        size={100}
      />
    ),
  },
  {
    label: "Node Js",
    description: "I am very familiar in this filed",
    icon: (
      <FaNodeJs
        size={100}
        className="text-[#bcc6cc] group-hover:text-green-400 transition ease-in duration-300"
      />
    ),
  },
  {
    label: "Mongo DB",
    description: "I am very familiar in this filed",
    icon: (
      <SiMongodb
        className="text-[#bcc6cc] group-hover:text-green-700 transition ease-in duration-300"
        size={100}
      />
    ),
  },
  {
    label: "MySQL",
    description: "I am very familiar in this filed",
    icon: (
      <SiMysql
        className="text-[#bcc6cc] group-hover:text-red-500 transition ease-in duration-300"
        size={100}
      />
    ),
  },
];

export const aboutMe = [
  {
    personalInfo: {
      label: "Dennis Butunyi Muganda",
      DOB: "26 August 2002",
      email: "butunyidennis@gmail.com",
      tel: +254112185371,
    },
    education: {
      primary: "Loresho Primary School",
      Secondary: "Dr Ribeiro Parklands School",
      tertiary: "Equip Africa Institute",
    },

    skills: {
      frontend: ["HTML,  CSS, Javascript, ReactJs, TailwindCSS, NextJs"],
      backend: ["NodeJs, ExpressJs, MongoDB, MySQL"],
      additonal: ["Git, npm, graphic design, Networking"],
    },
  },
];
