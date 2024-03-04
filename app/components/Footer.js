import { data } from 'autoprefixer';
import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'; 
import { FaFacebook, FaYoutube, FaInstagram, FaDiscord  } from "react-icons/fa";

const Footer = () => {
 const date = new Date();
  
  return (
    <footer className='bg-gray-950 text-white mt-10 p-7 w-full max-w-5xl mx-auto'>
      <section className=' px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-5'>
        <div>Moses Koroma Alright Reserved <span>&copy;</span> {date.getFullYear()}</div>
        
        <div className=' flex space-x-4'>

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


        </div>
      </section>
    </footer>
  )
}

export default Footer