import React, { useState } from 'react';
import Logo from "../assets/Logo";
import Ham from "../assets/icon/sidebar.svg";
import Close from "../assets/icon/close.svg";

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
            <a href="beranda">Beranda</a>
            <a href="paket">Paket</a>
            <a href="kontak">Kontak Kami</a>
            <a href="tentang">Tentang Kami</a>
          </ul>
        </div>
      </div>
      <div className={`fixed left-0 h-full -mt-1 w-full bg-primary-500 transition-transform duration-300 ${isOpen ? 'translate-x' : '-translate-x-full'}`}>
        <ul className="flex flex-col text-secondary-300 text-xs font-semibold items-center gap-8">
          <a href="#" onClick={toggleMenu}>Beranda</a>
          <a href="#" onClick={toggleMenu}>Paket</a>
          <a href="#" onClick={toggleMenu}>Kontak Kami</a>
          <a href="#" onClick={toggleMenu}>Tentang Kami</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;