import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahesh-tamrakar-7095951b7/">
                <Image
                  src="/linkedin-ico.png"
                  alt="icon"
                  width={500}
                  height={500}
                  quality={100}
                  className="main-footer__icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/maheshtamarakar">
                <Image
                  src="/github-ico.png"
                  alt="icon"
                  width={500}
                  height={500}
                  quality={100}
                  className="main-footer__icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/TamrakarMahesh2">
                <Image
                  src="/twitter-ico.png"
                  alt="icon"
                  width={500}
                  height={500}
                  quality={100}
                  className="main-footer__icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCb1CEVqGiKi7oCZTGfjmhWQ">
                <Image
                  src="/yt-ico.png"
                  alt="icon"
                  width={500}
                  height={500}
                  quality={100}
                  className="main-footer__icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Mahesh Tamatta</h4>
            <p className="main-footer__short-desc">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product 
            </p>
          </div>
        </div>
        <div className="main-footer__lower">
          &copy; Copyright 2021. Made by Mahesh Tamatta
        </div>
      </div>
    </footer>
  );
};

export default Footer;
