import React, { useState } from 'react';
import '../index.css';
import { Heart, MessageCircle, Home, Users, Phone, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='min-w-[85%] rounded-full z-5 bg-amber-50 fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center content-center px-10 py-3 mt-5'>
      <div className='flex items-center justify-center'>
      <h1 className="font-logo text-2xl mr-6 font-bold text-pink-900 flex items-center">
          <Heart className="text-pink-500 mr-2" size={24} fill="#fda4af" />
          WedWise
        </h1>        
        <ul className='gap-6 text-sm font-nav font-normal lg:flex hidden'>
          <li>Home</li>
          <li>My Matches</li>
          <li>Messages</li>
          <li>Profiles</li>
          <li>Contact Us</li>
        </ul>

        {openMenu && (
          <ul className='absolute top-[100%] right-0 text-xl font-nav font-bold lg:hidden p-10 rounded-sm bg-menu-rosy-warm text-warm-blush'>
            <li className='border-t border-pink-100 px-10 py-2 hover:bg-amber-50 hover:text-pink-950'>Home</li>
            <li className='border-t border-pink-100 px-10 py-2 hover:bg-amber-50 hover:text-pink-950'>My Matches</li>
            <li className='border-t border-pink-100 px-10 py-2 hover:bg-amber-50 hover:text-pink-950'>Messages</li>
            <li className='border-t border-pink-100 px-10 py-2 hover:bg-amber-50 hover:text-pink-950'>Profiles</li>
            <li className='border-t border-pink-100 border-b px-10 py-2 hover:bg-amber-50 hover:text-pink-950'>Contact Us</li>
          </ul>
        )}
      </div>
      <div className='hidden lg:flex items-center justify-center ml-auto gap-6'>
        <p>Login</p>
        <button className="bg-[var(--color-plum)] text-white hover:bg-[var(--color-warm-brown)] px-4 py-2 rounded-md">
          Learn More
        </button>
      </div>
      <div className='lg:hidden ml-auto'>
        <button onClick={toggleMenu}>
          <svg className='z-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="auto" viewBox="0 0 50 50">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;