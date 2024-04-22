"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Profile from '@/public/profile.jpeg'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuArrowRight, LuDownload } from 'react-icons/lu'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.5)
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                >
                  <Image src={Profile} alt='profile' priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>

                <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
                >
                  👋🏻
                </motion.span>
            </div>
        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Nihad.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">a year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
       initial={{opacity: 0, y: 100}}
       animate={{opacity: 1, y: 0}}
       transition={{delay: 0.1}}
       className='flex flex-col sm:flex-row gap-3 items-center justify-center text-lg font-medium'>
        <Link href="#contact" className='group bg-gray-900 text-white outline-none px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
          Contact me {' '} <LuArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>
        <a href="/Alizade-nihad.pdf" download className='group bg-white text-black px-7 py-3 flex items-center gap-2 border border-black/10 rounded-full hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white'>Download CV {' '} <LuDownload className='opacity-70 group-hover:translate-y-1 transition'/></a>
        <a href="https://www.linkedin.com/in/nihad-alizade-na2003/" target="_blank" className='group bg-white text-gray-700 p-4 flex items-center gap-2 border border-black/10 rounded-full hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white'><FaLinkedin/></a>
        <a href="https://github.com/NihadAI" target="_blank" className='group bg-white text-gray-700 p-4 flex items-center gap-2 border border-black/10 rounded-full hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white'><FaGithub/></a>
      </motion.div>
    </section>
  ) 
}
