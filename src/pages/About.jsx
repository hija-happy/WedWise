import React from 'react'
import '../index.css'
import about1 from '../images/about1.jpeg'
import about2 from '../images/about2.jpeg'
import about3 from '../images/about3.jpeg'
const About = () => {
  return (
    <section className='px-70  py-10 flex flex-col justify-center items-center bg-soft-white'>
        <h1 className='text-headings mb-7'>Why Us?</h1>
         <div className='flex gap-9 '>
            <img className='w-60 h-60 hover:scale-103 transition-transform duration-300 ease-in-out' src={about1} alt="" />
            <img className='w-60 h-60 hover:scale-103 transition-transform duration-300 ease-in-out' src={about2} alt="" />
            <img className='w-60 h-60 hover:scale-103 transition-transform duration-300 ease-in-out' src={about3} alt="" />
        </div>
        <div className='flex mt-4'>
            <p className='text-2xl p-10'>WedWise is your personal matchmaker in the digital world. We offer a trusted space for real connections,
            complete with smart search tools, privacy-first chatting, and stunning wedding planning resources — all in one place.</p>
        </div>
       


        
    </section>
  )
}

export default About