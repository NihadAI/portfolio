"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
export default function About() {
  const { ref } = useSectionInView("About")
  
  return (
    <motion.section
    ref={ref}
    id='about'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay: 0.17}}
     className='mbb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28'>
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies/series and researching mythologies, philosophy, etc. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and psychology</span>. I'm also
        learning art.
      </p>
    </motion.section>
  )
}
