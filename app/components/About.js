import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import { AiOutlineGift, AiOutlineMail } from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { TbPacman } from 'react-icons/tb'
import { IoLocationOutline } from 'react-icons/io5'
import Button from './Button'

const About = () => {
  return (
    <section id='about'>
        <Heading title='About Me'/>

        <div className=' grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
        <div><Image src='/assets/moses.png' alt='' width={700} height={500} className=' w-full rounded-md'/></div>
             
         <div>
            <div className=' flex items-center justify-between w-[300px]'>
              <div className=' flex flex-col gap-6'>

                <div className=' flex gap-4 items-center font-medium'>
                   <AiOutlineMail className=' text-yellow-500 text-[22px]'/>
                  Email
                </div>
                <div className=' flex gap-4 items-center font-medium'>
                   <FiBookOpen className=' text-yellow-500 text-[22px]'/>
                  Study
                </div> <div className=' flex gap-4 items-center font-medium'>
                   <BsGlobe2 className=' text-yellow-500 text-[22px]'/>
                  Website
                </div> <div className=' flex gap-4 items-center font-medium'>
                   <TbPacman className=' text-yellow-500 text-[22px]'/>
                  Interest
                </div> <div className=' flex gap-4 items-center font-medium'>
                   <IoLocationOutline className=' text-yellow-500 text-[22px]'/>
                  Location
                </div>
              </div>
              <div className=' flex flex-col gap-6'>
               <di>:</di>
               <di>:</di>
               <di>:</di>
               <di>:</di>
               <di>:</di>
              </div>

              <div className=' flex flex-col gap-6 px-1'>
              <div>moseskoroma737@gmail.com</div>
              <div>sulisha college</div>
              <div>udummy/Alison/Coursara</div>
              <div>Science Technology </div>
              <div>Sierra Leone Freetown</div>
              </div>

            </div>
            <div className=' max-w-[600px]'>
               <h2 className=' font-bold mt-16 mb-5'> 
               I'm Moses a web Developer.
               </h2>
               <p>Hi! My name is moses Koroma. I am a web Developer and I'm very passionate and dedicated to my work.
                with 4 years of experience as a professional
               </p>
               <Button link='#contact' text='Hire Me'/>
            </div>
          </div>    
        </div>
    </section>
  )
}

export default About