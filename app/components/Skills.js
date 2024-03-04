import React from 'react'
import Heading from './Heading'
import { FiBookOpen } from 'react-icons/fi'
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";


const Skills = () => {
  return (
    <section id='skills'>
        <Heading title='Skills'/>

        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 items-center px-3'>
             
             <div className=' bg-slate-100 dark:bg-slate-700 h-72 w-full rounded-md'>

             <div className=' flex justify-center items-center text-center'>
            <h1 className=' uppercase mb-3'>Frontend</h1>
            <span><FaCode  size={23} className=' text-yellow-500 mb-3'/></span>
            </div>

             <div className=' text-center'>
            <p>HTML5</p>
            <p>CSS 3 / TAILWIND</p>
            <p>JAVASCRIPT</p>
            <p>REACTJS</p>
            <p>NEXTJS</p>
            <p>PYTHON</p>
             </div>
             </div>

             <div className=' bg-slate-100 dark:bg-slate-700 w-full h-72 rounded-md'>

             <div className=' flex justify-center items-center '>
            <h1 className=' uppercase mb-3'>Backend</h1>
            <span><FaDatabase  size={23} className=' text-yellow-500 mb-3'/></span>
            </div>

             <div className=' text-center mt-7'>
            <p>DJANGO</p>
            <p>MONGODB</p>
            <p>SQL</p>
            </div>
             </div>

             <div className=' bg-slate-100 dark:bg-slate-700 w-full h-72 mt-3 rounded-md'>
             <div className=' flex  justify-center items-center'>
            <h1 className=' uppercase mb-3 px-11'>Design/UI/UX</h1>
             <span><GiPaintBrush  size={23} className=' text-yellow-500 mb-3'/></span>
            </div>


             <div className='text-center'>
             <p>PHOTOSHOP</p>
            <p>CAPCUT</p>
             </div>

             </div>


        </div>
    </section>
  )
}

export default Skills