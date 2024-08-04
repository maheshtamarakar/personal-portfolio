/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import Projects  from "../components/projects/Projects"
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
            Full Stack Developer Specializing in Frontend Development for Successful Websites and Web Applications
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
          </div>
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
                  Hey! It&apos;s <strong>Mahesh Tamatta</strong>, I&apos;m a{" "}
                  <strong> Full Stack Developer with 2+ year </strong> of
                  experience in Predigle. I'm a Full Stack Developer with 2+ year of experience in Predigle. 
                  I have a strong background in Angular, Nextjs, Reactjs, TypeScript, Tailwind CSS, Nestjs, 
                  Stripe payment, webhooks, Strapi, Python, Flask, SQL, and PostgreSQL, Jira, Git. In my current position, 
                  I developed scalable components using TypeScript, JavaScript, and Python, and created reports that provided 
                  valuable insights into marketing campaign analytics.
                </p>
                <p className="about__content-details-para">
                  Check out some of my work in the <strong>Projects </strong>{" "}
                  section.
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
                <div className="skills__skill">Jira</div>
                <div className="skills__skill">Git</div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
