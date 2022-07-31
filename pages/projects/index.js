import React from "react";
import groq from "groq";
import css from "../../styles/projects.module.css";
import client from "../../client";
import { useGlobalContext } from "../../contexts/context";
import ProjectCard from "../../components/ProjectCard/projectcard";
import Link from "next/link";

function Projects({ projects }) {
  const { theme } = useGlobalContext();

  console.log(projects[0].slug.current);

  return (
    <div className={css.container} id={theme}>
      <div className={css.projects}>
        <div className={css.title}>
          <h1>Work</h1>
          <span>things i&apos;ve worked on in the past.</span>
        </div>
        <div className={css.projectCards}>
          {projects.length > 0 &&
            projects.map((project, key) => {
              return (
                <a href={`/projects/${encodeURIComponent(project.slug.current)}`} key={key}>
                  <ProjectCard project={project} />
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(groq`
      *[_type == "project" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
