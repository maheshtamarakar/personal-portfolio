/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const [active, setActive] = useState(false)

  const handleHamMenu = () => {
    let isActive = active;
    isActive = !isActive
    setActive(isActive)
  }
  return (
    <header className="header">
      <div className="header__content">
        <a href="#" className="header__link" style={{padding: '0'}}>
        <div className="header__logo-container">          
          <div className="header__logo-img-cont">
            <Image
              src="/logo.jpg"
              alt="Mahesh Tamatta Logo Image"
              width={500}
              height={500}
              quality={100}
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Mahesh Tamatta</span>
        </div>
          </a>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="/#" className="header__link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="/#about" className="header__link">
                About{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="/#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="/#contact" className="header__link">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
          <div onClick={handleHamMenu} className={`header__main-ham-menu-cont`}>
            <Image
              src="/ham-menu.svg"
              alt="hamburger menu"
              width={500}
              height={500}
              quality={100}
              className={`header__main-ham-menu ${active ? 'd-none': ''}`}
            />
            <Image
              src="/ham-menu-close.svg"
              alt="hamburger menu close"
              width={500}
              height={500}
              quality={100}
              className={`header__main-ham-menu-close ${!active ? 'd-none': ''}`}
            />
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${active ? 'header__sm-menu--active': ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li onClick={handleHamMenu} className="header__sm-menu-link">
              <a href="/#"> Home </a>
            </li>

            <li onClick={handleHamMenu} className="header__sm-menu-link">
              <a href="/#about"> About </a>
            </li>

            <li onClick={handleHamMenu} className="header__sm-menu-link">
              <a href="/#projects"> Projects </a>
            </li>

            <li onClick={handleHamMenu} className="header__sm-menu-link">
              <a href="/#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
