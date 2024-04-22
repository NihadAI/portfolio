"use client"

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './SectionHeading'
import { sendEmail } from '@/actions/sendEmail'
import Button from './Button'
import { useToast } from './ui/use-toast'

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5)
    const { toast } = useToast()
  return (
    <motion.section ref={ref} id='contact' className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)]" 
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
        <SectionHeading>Contact</SectionHeading>
        <p className='capitalize text-gray-700'>plase directly contact me at {' '} <a href="mailto:nihadalizadaxx@gmail.com" className='underline lowercase'>nihadalizadaxx@gmail.com</a>{' '}or through this form</p>

        <form action={ async (formData) => {const {data, error} = await sendEmail(formData)
        if (error) {
          toast({
            title: "Your email was not sent",
            description: error,
            variant: "destructive"
          })
          return 
        }
        
        toast({
          title: "Your email was sent succesfully!",
          description: "Your email has been sent to the host. Please be patient"
        })
      }} className='mt-10 flex flex-col dark:text-black'>
            <input className='h-14 px-4 border outline-black border-black/10 rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all' required maxLength={500} placeholder='Your Email' type="email" name='senderEmail'/>
            <textarea className='h-52 my-3 p-4 rounded-lg border border-black/10 outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all' required maxLength={5000} placeholder='Your Message' name='message'/>
            <Button/>
        </form>
    </motion.section>
  )
}
