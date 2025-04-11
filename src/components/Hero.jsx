import React from 'react'
import background from '../images/background.jpg'
const Hero = () => {
  return (
    <div className='w-auto relative'>
        <img className='mask-image-fade' src={background} alt="" />
        <div className="absolute top-1/3 right-8 text-right items-center text-white max-w-xl mr-45 mt-12" >
    <h4 className=" text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
 font-bold mb-2 text-dark-text font-title ">Your Wedding, Your Way Wisely</h4>
          <p className='text-base sm:text-sm md:text-sm lg:text-md xl:text-xl
 text-warm-brown font-subtitle'>Let WedWise guide you through every step of the journey with smart tools, beautiful designs, and stress-free planning built just for you and your partner</p>
        </div>
       
    </div>
  )
}
export default Hero