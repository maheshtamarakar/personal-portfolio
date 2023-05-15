import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// import a from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Hey, I&apos;m Mahesh Tamatta</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="./#projects" className="btn btn--bg">
              Projects
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://www.linkedin.com/in/mahesh-tamrakar-7095951b7/"
              target="_blank"
              className="home-hero__social-icon-link"
            >
              <Image
                src="/linkedin-ico.png"
                alt="icon"
                width={500}
                height={500}
                quality={100}
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://github.com/maheshtamarakar"
              target="_blank"
              className="home-hero__social-icon-link"
            >
              <Image
                src="/github-ico.png"
                alt="icon"
                width={500}
                height={500}
                quality={100}
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://twitter.com/TamrakarMahesh2"
              target="_blank"
              className="home-hero__social-icon-link"
            >
              <Image
                src="/twitter-ico.png"
                alt="icon"
                width={500}
                height={500}
                quality={100}
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://www.youtube.com/channel/UCb1CEVqGiKi7oCZTGfjmhWQ" className="home-hero__social-icon-link">
              <Image
                  src="/yt-ico.png"
                  alt="icon"
                  width={500}
                  height={500}
                  quality={100}
                  className="home-hero__social-icon"
                />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="#"
              className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
              <img
                src="../public/insta-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Hey! It&apos;s <strong>Mahesh Tamatta</strong>, I&apos;m a{" "}
                  <strong> Full Stack Developer with 1 year </strong> of
                  experience in Predigle. In my current position, I developed
                  scalable components using Angular, TypeScript and Python, and
                  created reports that provided valuable insights into marketing
                  campaign analytics..
                </p>
                <p className="about__content-details-para">
                  Check out some of my work in the <strong>Projects </strong>{" "}
                  section.
                </p>
                <p className="about__content-details-para">
                  I&apos;m open to <strong>Job</strong> opportunities where I
                  can contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don&apos;t hesitate
                  to <strong>contact</strong> me.
                </p>
              </div>
              <a
                href="./#contact"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Contact
              </a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                <div className="skills__skill">Angular</div>
                <div className="skills__skill">Next.js</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">TypeScript</div>
                <div className="skills__skill">Tailwind CSS</div>
                <div className="skills__skill">Node.js</div>
                <div className="skills__skill">Python</div>
                <div className="skills__skill">Flask</div>
                <div className="skills__skill">SQL</div>
                <div className="skills__skill">SqlAlchemy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
            Here you will find some of the personal projects that I created with each project containing its own case study 
            </span>
          </h2>

          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="./assets/jpeg/project-mockup-example.jpeg"
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Project 1</h3>
                <p className="projects__row-content-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium.
                </p>
                <Link
                  href="/projects/project-1"
                  className="btn btn--med btn--theme dynamicBgClr"
                >
                  Case Study
                </Link>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="./assets/jpeg/project-mockup-example.jpeg"
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Project 2</h3>
                <p className="projects__row-content-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium.
                </p>
                <Link
                  href="/projects/project-2"
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Case Study
                </Link>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="./assets/jpeg/project-mockup-example.jpeg"
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Project 3</h3>
                <p className="projects__row-content-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium.
                </p>
                <Link
                  href="/projects/project-3"
                  className="btn btn--med btn--theme dynamicBgClr"
                >
                  Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">
              Contact
            </span>
            <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible 
            </span>
          </h2>
          <div className="contact__form-container">
            <form action="#" className="contact__form">
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="text"
                  className="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  className="contact__form-input"
                  placeholder="Enter Your Message"
                  name="message"
                  id="message"
                />
              </div>
              <button type="submit" className="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
