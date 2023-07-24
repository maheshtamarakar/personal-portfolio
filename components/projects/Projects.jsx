import Link from "next/link";
import Image from "next/image";
import React from "react";

const Projects = () => {
    let projects_data = [
        {
          name: "E-Commerce Website",
          heading: "Angular E-Commerce Website: Development and Deploymen",
          liveLink: "https://animewear.netlify.app/",
          gitHubLink: "https://github.com/maheshtamarakar/E-COMM-APP",
          img: "/gifs/ecomm.gif",
          arrProjectOverview: [
            "Developed an Angular E-Commerce website using Angular, Angular RxJS, Flask, SQL, Flask-SQLAlchemy, and Bootstrap, with a focus on creating a seamless user experience.",
            "Implemented features such as seller accounts, product management, user login and signup, cart functionality, and search using RxJS.",
            "Designed and implemented cart functionality, allowing users to add products to their cart without logging in and transferring the data to the user’s cart when logged in, providing a seamless user experience.",
            "Created a user-friendly UI design and optimized the UX for ease of use and efficient navigation.",
            "Utilized SQL, PostgreSQL, and pgAdmin for database management, ensuring reliable and secure data storage.",
            "Feel free to check out the Project by visiting the Live Link."
          ],
          skills: ["Angular", "Angular RxJS","Bootstrap", "Python", "Flask", "SQL", "Flask-SQLAlchemy", "GIT"],
          id:1
        },
        {
          name: "Movix",
          heading: "A responsive LiveDinnerRestaurant website to test my HTML5, CSS3, JavaScript",
          liveLink: "https://movix-topaz-nine.vercel.app/",
          gitHubLink: "https://github.com/maheshtamarakar/MOVIX",
          img: "/food_restaurant.png",
          arrProjectOverview: [
            "Built a simple and intuitive TodoList app using React.js, allowing users to easily add daily tasks that are stored in localStorage for convenient access.",
            "Implemented essential functionality such as editing, deleting, and deleting all tasks, enabling users to manage their daily tasks with ease.",
            "Demonstrated strong problem-solving skills by overcoming technical challenges such as efficiently managing localStorage, ensuring the smooth performance of the app.",
            "Feel free to check out the Project by visiting the Live Link. "
          ],
          skills: ["HTML", "CSS", "JavaScript"],
          id:2
        },
        {
          name: "ReactJS Expense Tracker",
          heading: "Efficient Expense Tracker: Track, Analyze, and Manage Your Finances with Ease",
          liveLink: "https://shimmering-sprite-67d8dc.netlify.app/",
          gitHubLink: "https://github.com/maheshtamarakar/Expense-Tracker",
          img: "/gifs/expenseTracker.gif",
          arrProjectOverview: [
            "I have developed an expense tracker using ReactJS that allows users to effortlessly track their expenses. With this application, users can easily enter the product name, price, and date of their expenses. The expenses are then categorized according to the respective years, providing a clear overview of spending patterns.",
            "One of the key features of this expense tracker is the visually appealing months chart bar. This chart visually represents the percentage of expenses in each month, allowing users to quickly analyze and compare their spending habits across different months.",
            "Overall, this expense tracker showcases my expertise in ReactJS and my ability to develop practical and user-centered applications.",
            "Feel free to check out the Project by visiting the Live Link. "
          ],
          skills: ["HTML", "CSS", "JavaScript", "React", "GIT"],
          id:3         

        },
    ]

  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">Projects</span>
        <span className="heading-sec__sub">
          Here you will find some of the personal projects that I created with
          each project containing its own case study
        </span>
      </h2>

      <div className="projects__content">
        {projects_data?.map((project) => {
            return  (
                <div key={project?.id} className="projects__row">
                <div className="projects__row-img-cont">
                  <Image
                    src={project.img}
                    alt="icon"
                    width={500}
                    height={500}
                    quality={100}
                    className="home-hero__social-icon"
                  />
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">{project.name}</h3>
                  <p className="projects__row-content-desc">
                    {project.heading}
                  </p>
                  <div className="skills">
                  {project?.skills.map((skill, index) => {
                    return (
                      <div key={index} className="skills__skill project_skills">
                        {skill}
                      </div>
                    );
                  })}
                </div>
                  <div className="project-details__links">
                  <Link
                    href={`${project?.liveLink}`}
                    className="btn btn--med btn--theme project-details__links-btn"
                    target="_blank"
                  >
                    Live Link
                  </Link>
                  <Link
                    href={`${project?.gitHubLink}`}
                    className="btn btn--med btn--theme-inv project-details__links-btn"
                    target="_blank"
                  >
                    Code Link
                  </Link>
                  </div>
                </div>
              </div>
            )
        })}
        {/* <div className="projects__row">
          <div className="projects__row-img-cont">
            <Image
              src="/gifs/expenseTracker.gif"
              alt="icon"
              width={500}
              height={500}
              quality={100}
              className="home-hero__social-icon"
            />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">
              ReactJS Expense Tracker
            </h3>
            <p className="projects__row-content-desc">
              Effortlessly track and categorize expenses with the ReactJS
              Expense Tracker, gaining valuable insights and achieving financial
              control. Simplify your financial management, make informed
              decisions, and reach your financial goals seamlessly.
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
            <Image
              src="/food_restaurant.png"
              alt="icon"
              width={500}
              height={500}
              quality={100}
              className="home-hero__social-icon"
            />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">
              Live Dinner Restaurant
            </h3>
            <p className="projects__row-content-desc">
              A responsive LiveDinnerRestaurant website to test my HTML5, CSS3,
              JavaScript
            </p>
            <Link
              href="/projects/project-3"
              className="btn btn--med btn--theme dynamicBgClr"
              target="_blank"
            >
              Case Study
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
