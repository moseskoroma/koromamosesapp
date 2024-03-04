import Image from 'next/image'
import Button from './components/Button'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className=" ">
      <div id='home' className='items-center grid grid-cols-1 md:grid-cols-2 gap-[60px]
'>
        <section className=' mt-10'>
        <h1 className=' pt-10 py-5 text-5xl '>I'm Moses Koroma</h1>
        <h2 className=' py-5'>I'm a Full Stack Web Developer</h2>
         <div className=' h-[2px] w-[40px] bg-yellow-400 '></div>
        <p className=' py-5'>In a professional context I'm a developer</p>
        <p> who is passionate about his job, people centric team worker, willing to collaborate, grow business</p>
        <Button link='#projects' text='learn more'/>
        </section>

        <div className=' mt-16'><Image src='/assets/moses.png' alt='' width={700} height={500} className=' w-full rounded-md'/></div>
      </div>
        

        <About/>
        <Skills/>
        <Contact/>
        <Projects/>
    </main>
  )
}

// items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0

// grid grid-cols-2 gap-5 sm:grid-cols-1