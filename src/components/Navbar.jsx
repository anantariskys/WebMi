import React, { useState } from 'react';
import Logo from "../assets/Logo";
import Ham from "../assets/icon/sidebar.svg";
import Close from "../assets/icon/close.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-primary-500'>
      <div className="flex justify-between pb-10 items-center px-4 py-5 md:py-6 md:px-8 lg:px-12 lg:py-10 xl:px-20">
        <img src={isOpen ? Close : Ham} alt="icon" onClick={toggleMenu} className="md:hidden" />
        <div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <ul className="flex xl:gap-20 gap-12 lg:text-lg text-xs font-semibold text-secondary-500">
            <Link
              to='headline'
              spy={true}
              smooth={true}
              duration={500}
              className='cursor-pointer active:border-b-4 active:border-base-500'>Beranda</Link>
            <Link
              to='paket'
              spy={true}
              smooth={true}
              duration={500}
              className='cursor-pointer active:border-b-4 active:border-base-500'>Paket</Link>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              className='cursor-pointer active:border-b-4 active:border-base-500'>Kontak Kami</Link>
            <Link
              to='information'
              spy={true}
              smooth={true}
              duration={500}
              className='cursor-pointer active:border-b-4 active:border-base-500'>Tentang Kami</Link>
          </ul>
        </div>
      </div>
      <div className={`fixed left-0 h-full -mt-1 w-full bg-primary-500 transition-transform duration-300 ${isOpen ? 'translate-x' : '-translate-x-full'}`}>
        <ul className="flex flex-col text-secondary-300 text-xs font-semibold items-center gap-8">
          <Link
              to='headline'
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='cursor-pointer active:border active:bg-secondary-300 active:text-primary-500 active:rounded-xl active:py-2 active:px-20'>Beranda</Link>
            <Link
              to='paket'
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='cursor-pointer active:border active:bg-secondary-300 active:text-primary-500 active:rounded-xl active:py-2 active:px-20'>Paket</Link>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='cursor-pointer active:border active:bg-secondary-300 active:text-primary-500 active:rounded-xl active:py-2 active:px-20'>Kontak Kami</Link>
            <Link
              to='information'
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='cursor-pointer active:border active:bg-secondary-300 active:text-primary-500 active:rounded-xl active:py-2 active:px-20'>Tentang Kami</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;