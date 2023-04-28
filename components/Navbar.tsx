import React from "react";
import Image from 'next/image'
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-white body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link href={'/'} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image
            src="/logo.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            className="w-[4rem] h-[4rem] text-white p-2 rounded-full"
          />
          <span className="ml-3 text-sm text-[#333] hover:text-yellow-400 cursor-pointer font-bold">MAHESH TAMATTA</span>
          </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold text-sm">
          <a className="mr-5 text-[#333] hover:text-yellow-400 cursor-pointer">HOME</a>
          <a className="mr-5 text-[#333] hover:text-yellow-400 cursor-pointer">ABOUT</a>
          <a className="mr-5 text-[#333] hover:text-yellow-400 cursor-pointer">PROJECTS</a>
          <a className="mr-5 text-[#333] hover:text-yellow-400 cursor-pointer">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
