import Link from "next/link";
import { useState } from "react";
import projectData from "../../project_data/local_db.json";

export default function Page(props: { myProject: any }) {
  const [project, setProject] = useState(props.myProject);

  if (!project) {
    return (
      <section className="project-details">
        <div className="main-container">
          <p className="project-details__desc-para" style={{ textAlign: "center" }}>
            Project not found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <div className="projects__row-meta projects__row-meta--hero">
            <span className="projects__row-tag">{project?.type}</span>
            {(project?.company || project?.period) && (
              <span className="projects__row-submeta projects__row-submeta--hero">
                {project?.company}
                {project?.company && project?.period ? " · " : ""}
                {project?.period}
              </span>
            )}
          </div>
          <h1 className="heading-primary">{project?.name}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{project?.heading}</p>
          </div>
          {project?.liveLink && (
            <div className="project-cs-hero__cta">
              <Link href={`${project?.liveLink}`} className="btn btn--bg" target="_blank">
                Live Link
              </Link>
            </div>
          )}
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__content-main">
              {project?.caseStudy?.length ? (
                project.caseStudy.map(
                  (section: { title: string; body: string[] }, index: number) => (
                    <div key={index} className="project-details__desc">
                      <h3 className="project-details__content-title">
                        {section.title}
                      </h3>
                      {section.body?.map((para: string, pIndex: number) => (
                        <p key={pIndex} className="project-details__desc-para">
                          {para}
                        </p>
                      ))}
                    </div>
                  )
                )
              ) : (
                <div className="project-details__desc">
                  <h3 className="project-details__content-title">
                    Project Overview
                  </h3>
                  {project?.arrProjectOverview?.map(
                    (overview: string, index: number) => {
                      return (
                        <p key={index} className="project-details__desc-para">
                          {overview}
                        </p>
                      );
                    }
                  )}
                </div>
              )}
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {project?.skills?.map((skill: string, index: number) => {
                    return (
                      <div key={index} className="skills__skill">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
              {(project?.liveLink || project?.gitHubLink || project?.backendLink) && (
                <div className="project-details__links">
                  <h3 className="project-details__content-title">See More</h3>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// This gets called on every request.
// project_data/local_db.json is the single source of truth for project
// content (shared with components/projects/Projects.jsx), so we import it
// directly here instead of round-tripping through our own API route over
// HTTP with a hardcoded production URL (which broke local dev).
export async function getServerSideProps(context: { params: { slug: string } }) {
  try {
    const { slug } = context.params;
    const data = projectData as Record<string, any>;
    const myProject = data[slug] ?? null;

    return { props: { myProject } };
  } catch (err) {
    console.log(err);
    return { props: { myProject: null } };
  }
}
