import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo";
import Ham from "../assets/icon/sidebar.svg";
import Ham2 from "../assets/icon/sidebar2.svg";
import Close from "../assets/icon/close.svg";
import Close2 from "../assets/icon/close2.svg";
import { information } from "../assets/data/information";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`w-full fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-opacity-90 bg-base-300 text-primary-500 shadow-lg" : "bg-transparent text-secondary-500"}`}>
      <div className="flex justify-between items-center container mx-auto px-4 py-5 md:py-6 md:px-8 lg:px-12 lg:py-6 xl:px-20">
        <img src={isOpen ? (isScrolled ? Close2 : Close) : isScrolled ? Ham2 : Ham} alt="icon" onClick={toggleMenu} className="md:hidden " />{" "}
        <div>
          <Logo color={isScrolled} />
        </div>
        <div className="hidden md:block">
          <ul className="flex  gap-10 lg:text-lg text-xs font-semibold ">
            <div onClick={() => handleScroll('headline')} className="cursor-pointer group relative">
              <p>Beranda</p>
              <div className={`absolute bottom-0 h-0.5  group-hover:w-full w-0 group-hover:left-0 right-0 duration-300 ease-in-out  ${isScrolled ? "bg-primary-500" : "bg-base-500"}`}></div>
            </div>
            <div onClick={() => handleScroll('information')} className="cursor-pointer group relative">
              <p>Tentang Kami</p>
              <div className={`absolute bottom-0 h-0.5  group-hover:w-full w-0 group-hover:left-0 right-0 duration-300 ease-in-out  ${isScrolled ? "bg-primary-500" : "bg-base-500"}`}></div>
            </div>
            <div onClick={() => handleScroll('paket')} className="cursor-pointer group relative">
              <p>Paket</p>
              <div className={`absolute bottom-0 h-0.5  group-hover:w-full w-0 group-hover:left-0 right-0 duration-300 ease-in-out  ${isScrolled ? "bg-primary-500" : "bg-base-500"}`}></div>
            </div>
            <div onClick={() => handleScroll('contact')} className="cursor-pointer group relative">
              <p>Kontak Kami</p>
              <div className={`absolute bottom-0 h-0.5  group-hover:w-full w-0 group-hover:left-0 right-0 duration-300 ease-in-out  ${isScrolled ? "bg-primary-500" : "bg-base-500"}`}></div>
            </div>
          </ul>
        </div>
      </div>
      <div className={`fixed left-0 h-full top-[68px] w-full ${isScrolled?"bg-secondary-300 text-primary-500 bg-opacity-90":"bg-primary-500 text-secondary-300"} transition-transform duration-300 ${isOpen ? "translate-x" : "-translate-x-full"}`}>
        <ul className="flex flex-col p-4 text-xs font-semibold items-center gap-4">
          <div onClick={()=>{toggleMenu();handleScroll('headline')}} className={`${isScrolled?"active:text-secondary-300 active:bg-primary-500":"active:bg-secondary-300 active:text-primary-500"} cursor-pointer active:border  active:rounded-xl py-2 active:px-20`}>
            Beranda
          </div>
          <div onClick={()=>{toggleMenu();handleScroll('information')}}  className={`${isScrolled?"active:text-secondary-300 active:bg-primary-500":"active:bg-secondary-300 active:text-primary-500"} cursor-pointer active:border  active:rounded-xl py-2 active:px-20`}>
            Tentang Kami
          </div>
          <div onClick={()=>{toggleMenu();handleScroll('paket')}}  className={`${isScrolled?"active:text-secondary-300 active:bg-primary-500":"active:bg-secondary-300 active:text-primary-500"} cursor-pointer active:border  active:rounded-xl py-2 active:px-20`}>
            Paket
          </div>
          <div onClick={()=>{toggleMenu();handleScroll('contact')}}  className={`${isScrolled?"active:text-secondary-300 active:bg-primary-500":"active:bg-secondary-300 active:text-primary-500"} cursor-pointer active:border  active:rounded-xl py-2 active:px-20`}>
            Kontak Kami
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
