/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import Projects  from "../components/projects/Projects"
import Experience from "../components/experience/Experience"
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Text,
  useToast
} from "@chakra-ui/react";
// import a from "next/link";
const initialValue = {
  name: "",
  email: "",
  message: "",
};
const initialState = { isLoading: false, values: initialValue };

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState(initialState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  const toast = useToast()

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initialState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top"
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  
  const onBlur = ({target}) => {
    setTouched((prev) => ({
      ...prev,
      [target.name]:true,
    }))
  }

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Hey, I&apos;m Mahesh Tamatta</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              Frontend Developer | React.js | TypeScript | Redux | Component
              Libraries | Accessibility
            </p>
            <p className="text-primary home-hero__location">
              Mumbai, Maharashtra, India
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="./#projects" className="btn btn--bg">
              Projects
            </a>
            <a href="/Mahesh_Tamatta_Frontend_Developer_Resume.pdf" download className="btn btn--bg btn--theme-inv home-hero__resume-btn">
              Download Resume
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://www.linkedin.com/in/mahesh-tamatta-7095951b7/"
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
          {/* <div className="home-hero__social">
            <a
              href="https://www.youtube.com/channel/UCb1CEVqGiKi7oCZTGfjmhWQ"
              target="_blank"
              className="home-hero__social-icon-link"
            >
              <Image
                src="/yt-ico.png"
                alt="icon"
                width={500}
                height={500}
                quality={100}
                className="home-hero__social-icon"
              />
            </a>
          </div> */}
          {/* <div className="home-hero__social">
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
          </div> */}
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
                  Hey! It&apos;s <strong>Mahesh Tamatta</strong>, a <strong>Frontend Developer</strong> with 4.6
                  years of experience building production React applications
                  across fintech, healthcare and e-commerce. I lead frontend
                  architecture for an MSME lending platform at{" "}
                  <strong>Canopi</strong>, and previously led a 4-person team
                  at <strong>Predigle</strong> that built a company-wide
                  Storybook component library, cutting duplicate UI code by
                  40%.
                </p>
                <p className="about__content-details-para">
                  I focus on performance, accessibility (WCAG) and
                  design-system consistency, with hands-on Node.js/MongoDB and
                  LLM/RAG integration experience. Check out some of my work in
                  the <strong>Experience</strong> and <strong>Projects</strong>{" "}
                  sections below.
                </p>
                <p className="about__content-details-para">
                  <strong>Education:</strong> B.E. Mechanical Engineering,
                  Terna Engineering College, Mumbai (2018 &ndash; 2022).
                </p>
                <p className="about__content-details-para">
                  I&apos;m open to <strong>Job</strong> opportunities where I
                  can contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then please <strong>contact</strong> me.
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
              <div className="skills__groups">
                <div className="skills__group">
                  <h4 className="skills__group-title">Core</h4>
                  <div className="skills">
                    <div className="skills__skill">React.js</div>
                    <div className="skills__skill">TypeScript</div>
                    <div className="skills__skill">JavaScript (ES6+)</div>
                    <div className="skills__skill">Redux</div>
                    <div className="skills__skill">Context API</div>
                    <div className="skills__skill">React Hooks</div>
                    <div className="skills__skill">Next.js</div>
                    <div className="skills__skill">State Management</div>
                    <div className="skills__skill">Component Architecture</div>
                  </div>
                </div>
                <div className="skills__group">
                  <h4 className="skills__group-title">UI &amp; Design Systems</h4>
                  <div className="skills">
                    <div className="skills__skill">Storybook</div>
                    <div className="skills__skill">HTML5</div>
                    <div className="skills__skill">CSS3</div>
                    <div className="skills__skill">SCSS</div>
                    <div className="skills__skill">Tailwind CSS</div>
                    <div className="skills__skill">Material UI</div>
                    <div className="skills__skill">Responsive Design</div>
                    <div className="skills__skill">Accessibility (WCAG)</div>
                    <div className="skills__skill">Cross-Browser Compatibility</div>
                  </div>
                </div>
                <div className="skills__group">
                  <h4 className="skills__group-title">Performance &amp; Data</h4>
                  <div className="skills">
                    <div className="skills__skill">Performance Optimization</div>
                    <div className="skills__skill">Infinite Scroll</div>
                    <div className="skills__skill">Pagination</div>
                    <div className="skills__skill">REST API Integration</div>
                    <div className="skills__skill">Error Handling</div>
                    <div className="skills__skill">Data Visualization</div>
                  </div>
                </div>
                <div className="skills__group">
                  <h4 className="skills__group-title">Testing &amp; Tools</h4>
                  <div className="skills">
                    <div className="skills__skill">Jest</div>
                    <div className="skills__skill">Git</div>
                    <div className="skills__skill">GitHub</div>
                    <div className="skills__skill">Postman</div>
                    <div className="skills__skill">Jira</div>
                    <div className="skills__skill">CI/CD</div>
                    <div className="skills__skill">Vercel</div>
                  </div>
                </div>
                <div className="skills__group">
                  <h4 className="skills__group-title">Backend &amp; AI (working knowledge)</h4>
                  <div className="skills">
                    <div className="skills__skill">Node.js</div>
                    <div className="skills__skill">Express.js</div>
                    <div className="skills__skill">MongoDB</div>
                    <div className="skills__skill">JWT</div>
                    <div className="skills__skill">OpenAI API</div>
                    <div className="skills__skill">RAG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Experience />
      <section id="projects" className="projects sec-pad">
          <Projects />
      </section>
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">
              Contact
            </span>
            <span className="heading-sec__sub heading-sec__sub--lt">
              Please Contact me by submitting the form below and I will
              get back to you as soon as possible
            </span>
          </h2>
          <div className="contact__form-container">
            <form action="#" className="contact__form">
              {error && (
                <Text color="red.300" my={4} fontSize="xl">
                  {error}
                </Text>
              )}
              <div className="contact__form-field">
                <FormControl isInvalid={touched.name && !values.name} isRequired>
                  <FormLabel className="contact__form-label" htmlFor="name">
                    Name
                  </FormLabel>
                  <Input
                    errorBorderColor="red.300"
                    required
                    placeholder="Enter Your Name"
                    type="text"
                    className="contact__form-input"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
              </div>
              <div className="contact__form-field">
                <FormControl isInvalid={touched.email && !values.email} isRequired>
                  <FormLabel className="contact__form-label" htmlFor="email">
                    Email
                  </FormLabel>
                  <Input
                    required
                    placeholder="Enter Your Email"
                    type="text"
                    className="contact__form-input"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              </div>
              <div className="contact__form-field">
                <FormControl isInvalid={touched.message && !values.message} isRequired>
                  <FormLabel className="contact__form-label" htmlFor="message">
                    Message
                  </FormLabel>
                  <Textarea
                    required
                    className="contact__form-input"
                    placeholder="Enter Your Message"
                    name="message"
                    id="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              </div>
              <Button
              colorScheme="blue"
              onClick={onSubmit}
              isDisabled={
                !values.name || !values.email || !values.message
              }
              isLoading={isLoading}
              className="btn btn--theme submit_btn contact__btn"
              >Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
