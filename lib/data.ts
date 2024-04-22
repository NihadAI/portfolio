import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SouthEstate from '@/public/southestate.png'
import Akademi from '@/public/akademi.png'
import DigitHippo from '@/public/digitalhippo.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated course",
    location: "Baku, Bayil",
    description:
      "I graduated after 4 months of studying. I immediately found a job as a front-end intern.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023",
  },
  {
    title: "Front-End Developer",
    location: "Baku, Neftchilar",
    description:
      "I worked as a front-end developer for three months in an internal project. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - December 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Baku, Khatai",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "South Estate",
    description:
      "I worked as a full-stack developer on this final course project for 2 weeks. Users can upload public lists for real estate businnes.",
    tags: ["React", "Vite.js", "MongoDB", "Tailwind", "Redux Toolkit", "Express"],
    imageUrl: SouthEstate,
    repoLink: "https://github.com/NihadAI/mern-estate"
  },
  {
    title: "Akademi",
    description:
      "School dashboard project. I was the front-end developer. It has features like filtering, dark mode, sorting, CRUD operatins and pagination.",
    tags: ["React", "TypeScript", "Vite.js", "Tailwind", "Redux Toolkit"],
    imageUrl: Akademi,
    repoLink: "https://github.com/NihadAI/Akademi"
  },
  {
    title: "Digit Hippo",
    description:
      "A public web app for UI Kit and Icon commerce. Contains features like verification and receipt emails and admin dashboard .",
    tags: ["React", "Next.js", "TRPC", "Tailwind", "Zustand"],
    imageUrl: DigitHippo,
    repoLink: "https://github.com/NihadAI/DigitHippo"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux Toolkit",
  "Apexchart",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;