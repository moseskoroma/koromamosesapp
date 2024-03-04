import React from 'react'
import Heading from './Heading'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id='projects'>
        <Heading title='Projects'/>

        {/* <div className=' grid grid-cols-3 gap-4'>
          <div className=' row-span-2 relative group'>
        <Image src='/assets/project.jpg' alt='' width={700} height={500} className=' w-full'/>
         <div className=' bg-[#000000db] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-content-center text-white'>
          Project Title
         </div>
          </div>
        </div> */}


        <div className=' grid grid-cols-1 md:grid-cols-3 gap-8'>

          <div>
          <Image src='/assets/project.jpg' alt='' width={700} height={500} className=' w-full rounded-md '/>
             <p className=' tracking-wide text-center'>podacast application</p>
          </div>

          
          <div>
          <Image src='/assets/project.jpg' alt='' width={700} height={500} className=' w-full rounded-md'/>
             <p  className=' tracking-wide text-center'>podacast application</p>
          </div>

          
          <div>
          <Image src='/assets/project.jpg' alt='' width={700} height={500} className=' w-full rounded-md'/>
             <p  className=' tracking-wide text-center'>podacast application</p>
          </div>
          
          <div>
          <Image src='/assets/project.jpg' alt='' width={700} height={500} className=' w-full rounded-md'/>
             <p  className=' tracking-wide text-center'>podacast application</p>
          </div>
          
          <div>
          <Image src='/assets/project.jpg' alt='' width={700} height={500} className=' w-full rounded-md'/>
             <p  className=' tracking-wide text-center'>podacast application</p>
          </div>
          
          <div>
          <Image src='/assets/project.jpg' alt='' width={700} height={500} className=' w-full rounded-md'/>
             <p  className=' tracking-wide text-center'>podacast application</p>
          </div>
        </div>

    </section>
  )
}

export default Projects