import React, { useState } from 'react'
import '../index.css'
const Navbar = () => {

  const [openMenu , setOpenMenu] = useState(false);

  const toggleMenu =() =>  {
    setOpenMenu(!openMenu)
  }
  return (
    <div className='min-w-[85%] rounded-full z-5 bg-amber-50 fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center content-center px-10 py-3 mt-5'>
        <div className='flex items-center justify-center'>
            <h1 className='text-2xl mr-6 font-logo' >WedWise</h1>
            <ul className='gap-2 text-sm font-nav font-normal lg:flex hidden' >
                <li>Home</li>
                <li>My Matches</li>
                <li>Messages</li>
                <li>Profiles</li>
                <li>Contact Us</li>
            </ul>

          { openMenu &&  
          (<ul className='absolute top-[100%] right-0 text-xl font-nav font-bold lg:hidden p-10 rounded-sm bg-menu-rosy-warm text-warm-blush' >
                <li className='border-t border-pink-100 px-10 py-2 hover:bg-amber-50'>Home</li>
                <li className='border-t border-pink-100 px-10 py-2'>My Matches</li>
                <li className='border-t border-pink-100 px-10 py-2'>Messages</li>
                <li className='border-t border-pink-100 px-10 py-2'>Profiles</li>
                <li className='border-t border-pink-100 border-b px-10 py-2'>Contact Us</li>
            </ul>)}
        </div>
        <div className='hidden lg:flex items-center justify-center ml-auto gap-2 '>
            <p>Login</p>
            <button className="bg-[var(--color-plum)] text-white hover:bg-[var(--color-warm-brown)] px-4 py-2 rounded-md">
          Learn More
        </button>
        </div>
        <div className='lg:hidden ml-auto' >
          <button onClick={toggleMenu}>
            <svg className='z-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="px" width="20" height="auto" viewBox="0 0 50 50">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </button>
        </div>
    </div>
  )
}

export default Navbar