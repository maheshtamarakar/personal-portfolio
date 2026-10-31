import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Canopi India Private Limited",
    role: "Sr. Software Engineer",
    period: "Feb 2026 – Present",
    location: "Mumbai",
    bullets: [
      "Lead frontend development and architecture for Canopi Connect, a React-based MSME lending platform where vendors register, submit business details and documents, and connect with lenders and banks for loan processing.",
      "Own end-to-end workflow design and frontend business logic, turning complex lending requirements into scalable user journeys: onboarding, document upload, OCR-based digitization, document verification and downstream processing.",
      "Designed REST API integration patterns with consistent error handling and efficient data-fetching flows, keeping the UI resilient across lending workflows.",
    ],
    tags: ["React", "TypeScript", "REST APIs", "Fintech"],
  },
  {
    company: "Predigle India Pvt Ltd",
    role: "Sr. Software Engineer",
    period: "Jun 2022 – Jan 2026",
    location: "Chennai",
    progression:
      "Software Engineer L1 → Software Engineer L2 → Frontend Dev Expert → Sr. Software Engineer",
    bullets: [
      "Led a 4-person team building a company-wide React component library with Storybook documentation, GitHub Actions CI/CD and automated QA-to-production workflows, cutting duplicate UI code by 40% and improving design consistency, accessibility and cross-browser compatibility.",
      "Developed the frontend for a health analytics dashboard: multi-graph visualizations, reusable filters and a Gantt-based patient insights module with PDC scoring, using Redux data flows, performance optimizations and accessibility improvements.",
      "Delivered a responsive patient onboarding portal with multi-step forms, document handling, session resume and an admin progress dashboard.",
      "Implemented infinite scrolling with optimized API handling and pagination for Precog, improving large-data performance and responsiveness by 30%.",
      "Refactored legacy UI into modular reusable components, reducing development time by 25%; engineered high-performance React components that improved UI speed by 30%.",
      "Created an e-commerce cart and pixel-perfect React UI for digitalfactory24; led full-stack OTP authentication (React, Node.js, MongoDB) for Byonic.ai, reducing onboarding time by 25%.",
    ],
    tags: ["React", "Redux", "Storybook", "CI/CD", "Node.js", "MongoDB"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section id="experience" className="experience sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Experience</span>
          <span className="heading-sec__sub">
            4.6 years building production React applications across fintech,
            healthcare and e-commerce
          </span>
        </h2>

        <motion.div
          className="experience__timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div className="experience__item" key={index} variants={itemVariants}>
              <div className="experience__marker" aria-hidden="true" />
              <div className="experience__content">
                <div className="experience__top">
                  <h3 className="experience__role">{exp.role}</h3>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <div className="experience__company-row">
                  <span className="experience__company">{exp.company}</span>
                  <span className="experience__location">{exp.location}</span>
                </div>
                {exp.progression && (
                  <p className="experience__progression">{exp.progression}</p>
                )}
                <ul className="experience__bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="experience__bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="skills">
                  {exp.tags.map((tag, i) => (
                    <div key={i} className="skills__skill project_skills">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
