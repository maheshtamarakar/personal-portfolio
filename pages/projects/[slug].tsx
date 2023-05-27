import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const path = require('path');

export default function Page(props: { myProject: any; }) {
  const [project, setProject] = useState(props.myProject);
  // const router = useRouter();
  // const slug = router.query.slug;
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{project?.name}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{project?.heading}</p>
          </div>
          <div className="project-cs-hero__cta">
            <Link href={`${project?.liveLink}`} className="btn btn--bg" target="_blank">
              Live Link
            </Link>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              {/* <img
                src="./assets/jpeg/project-mockup-example.jpeg"
                alt="Project Image"
                className="project-details__showcase-img"
              /> */}
              <Image
                src={`${project?.img}`}
                alt="Project Image"
                width={500}
                height={500}
                quality={100}
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  Project Overview
                </h3>
                {project?.arrProjectOverview.map((overview: string, index: number) => {
                  return (
                    <p key={index} className="project-details__desc-para">
                      {overview}
                    </p>
                  );
                })}
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {project?.skills.map((skill: string, index: number) => {
                    return (
                      <div key={index} className="skills__skill">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
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
        </div>
      </section>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context: { query: { slug: any; }; }) {
  try {
    // const filePath = path.join('project_data', 'local_db.json');

    // const data = await fs.promises.readFile(
    //   filePath,
    //   "utf-8"
    // );
    const response = await fetch('https://personal-portfolio-phi-dusky.vercel.app/api/project_data')
    let data = await response.json()
    const { slug } = context.query;
    // const myProject = await JSON.parse(data)[slug];
    const myProject = data[slug];
    // console.log('myProject', myProject);
    
    return { props: { myProject } };
  } catch (err) {
    console.log(err);
    return { props: { myProject: null } };
  }
}
