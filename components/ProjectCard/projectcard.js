import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import css from "../../styles/projects.module.css";
import client from "../../client";

function ProjectCard({ project }) {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  return (
    <div className={css.card}>
      <div className={css.projectImage}>
        <Image
          src={urlFor(project.mainImage.asset._ref).width().url()}
          width={200}
          height={150}
          priority
        />
      </div>
      <div className={css.projectDetail}>
        <li className={css.projectTitle}>
          <h4>{project.title}</h4>
          <span className={css.domainName}>{project.domain}</span>
        </li>
      </div>
    </div>
  );
}

export default ProjectCard;
