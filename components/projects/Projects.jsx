import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import projectData from "../../project_data/local_db.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  // project_data/local_db.json is the single source of truth for project
  // content, shared by this grid and the /projects/[slug] case-study page,
  // so the two can never disagree again.
  const projects_data = Object.entries(projectData).map(([slug, project]) => ({
    ...project,
    id: slug,
  }));

  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">Projects</span>
        <span className="heading-sec__sub">
          Here you will find some of the projects and role highlights that I&apos;ve
          worked on, each with its own case study
        </span>
      </h2>

      <motion.div
        className="projects__content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {projects_data?.map((project) => {
          return (
            <motion.div key={project?.id} className="projects__row" variants={rowVariants}>
              <div className="projects__row-top">
                <div className="projects__row-badge" aria-hidden="true">
                  {project?.name?.charAt(0)}
                </div>
                <div className="projects__row-meta">
                  <span className="projects__row-tag">{project?.type}</span>
                  {(project?.company || project?.period) && (
                    <span className="projects__row-submeta">
                      {project?.company}
                      {project?.company && project?.period ? " · " : ""}
                      {project?.period}
                    </span>
                  )}
                </div>
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{project.name}</h3>
                <p className="projects__row-content-desc">{project.heading}</p>
                <div className="skills">
                  {project?.skills?.map((skill, index) => {
                    return (
                      <div key={index} className="skills__skill project_skills">
                        {skill}
                      </div>
                    );
                  })}
                </div>
                <div className="project-details__links">
                  {project?.liveLink && (
                    <Link
                      href={`${project?.liveLink}`}
                      className="btn btn--med btn--theme project-details__links-btn"
                      target="_blank"
                    >
                      Live Link
                    </Link>
                  )}
                  {project?.gitHubLink && (
                    <Link
                      href={`${project?.gitHubLink}`}
                      className="btn btn--med btn--theme-inv project-details__links-btn"
                      target="_blank"
                    >
                      Code Link
                    </Link>
                  )}
                  {project?.backendLink && (
                    <Link
                      href={`${project?.backendLink}`}
                      className="btn btn--med btn--theme-inv project-details__links-btn"
                      target="_blank"
                    >
                      Backend Repo
                    </Link>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="btn btn--med btn--theme-inv project-details__links-btn"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
