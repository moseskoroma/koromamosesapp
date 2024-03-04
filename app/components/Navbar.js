'use client'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa'; 
import { FaFacebook, FaYoutube, FaInstagram, FaDiscord  } from "react-icons/fa";
import Themebutton from './Themebutton';

const Navbar = () => {
  const [ nav, setNav] = useState(false);

  const handleNav = () =>{
     setNav(!nav);
  }

  return (
    <div className=' py-3  w-full fixed z-[100] shadow-md bg-white dark:bg-slate-800'>
    <nav className=' max-w-5xl mx-auto px-4 sm:px-6 lg:px-3'>
    <div className=" flex items-center justify-between">
    <div className=' rounded-full'>
    <Link href='/' className=''>    
      <Image src='/assets/mk.png' alt=''
      width='50' height='50'
      />
          </Link>
    </div>
        
        <div className=' space-x-6 font-light font-serif capitalize hidden md:flex'>
           <Link href='/' className='  hover:text-gray-600 '>home</Link>
           <Link href='/#about' className='   hover:text-gray-400'>About</Link>
           <Link href='/#skills' className='   hover:text-gray-400'>skills</Link>
           <Link href='/#contact' className='   hover:text-gray-400'>Contact</Link>
           <Link href='/#projects' className='   hover:text-gray-400'>Project</Link>
        </div>

        <div className=' hidden md:flex'><Themebutton/></div>
        <div onClick={handleNav} className=' md:hidden cursor-pointer'><AiOutlineMenu size={25}/></div>

     </div>
    </nav>
    {/* Mobile Menu */}
      <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in p-10 duration-500' 
        :'fixed left-[-100%] top-0 p-10 ease-in'  
      }>
           <div className=' flex  w-full items-center justify-between'>
          <div className=' rounded-full'>
          <Link href='/'>    
      <Image src='/assets/mk.png' alt=''
      width='50' height='50'
      />
          </Link>
          </div>
            <div onClick={handleNav} className=' text-black cursor-pointer'><AiOutlineClose size={20}/></div>
           </div>
            <div className=' text-black py-7'>
              <ul className=' flex flex-col items-center gap-5 '>
              <Link onClick={() => setNav(false)} href='/' className=' capitalize hover:scale-105 ease-in'>home</Link>
              <Link onClick={() => setNav(false)} href='/#about'  className=' capitalize hover:scale-105 ease-in'>About</Link>
             <Link onClick={() => setNav(false)} href='/#skills' className='  capitalize hover:text-gray-600'>skills</Link>
             <Link onClick={() => setNav(false)} href='/#contact'  className=' capitalize hover:scale-105 ease-in'>Contact</Link>
             <Link onClick={() => setNav(false)} href='/#projects'  className=' capitalize hover:scale-105 ease-in'>Project</Link>
              </ul>

              <div className=' pt-40'>
                <p className=' uppercase tracking-widest text-yellow-500'>Let's connect</p>
                <div className=' flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className=' rounded-full cursor-pointer text-yellow-600 hover:scale-105 ease-in'>
                    <Link href='https://www.linkedin.com/in/moses-koroma-a58567261/'>
                  <FaLinkedinIn size={17}/>
                    </Link>
                  </div>

                  <div className=' rounded-full cursor-pointer text-yellow-600 hover:scale-105 ease-in'>
                    <Link href='https://www.facebook.com/moses.koroma.169'>
                  <FaFacebook size={17}/>
                    </Link>
                  </div>

                  <div className=' rounded-full cursor-pointer text-yellow-600 hover:scale-105 ease-in'>
                    <Link href='https://www.youtube.com/@codewithmoses-qt4nt'>
                  <FaYoutube size={17}/>
                    </Link>
                  </div>
                  <div className=' rounded-full cursor-pointer text-yellow-600 hover:scale-105 ease-in'>
                    <Link href='https://www.instagram.com/koroma2622/?hl=en'>
                  <FaInstagram size={17}/>
                    </Link>
                  </div>
                  <div className=' rounded-full cursor-pointer text-yellow-600 hover:scale-105 ease-in'>
                    <Link href='https://discord.com/channels/@me'>
                  <FaDiscord size={17}/>
                    </Link>
                  </div>
                  <div><Themebutton/></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar