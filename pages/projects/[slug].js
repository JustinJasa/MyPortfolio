import React from "react";
import { useGlobalContext } from "../../contexts/context";
import css from "../../styles/project.module.css";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import client from "../../client";

function Project({ project }) {
  console.log(project);
  const { theme } = useGlobalContext();

  let displayImage = project.mainImage.asset._ref;

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div className={css.imageContainer}>
            <Image
              alt={value.alt || " "}
              src={urlFor(value)
                .width()
                .height()
                .fit("max")
                .auto("format")
                .url()}
              width={600}
              height={400}
            />
          </div>
        );
      },
    },
  };

  return (
    <div className={css.container} id={theme}>
      <div className={css.project}>
        <div>
          <h1>{project.title}</h1>
          <div>
            <span>Worked on: {project.publishedAt}</span>
          </div>
          <div className={css.technologiesContainer}>
            {project.technologies &&
              project.technologies.map((technology) => {
                return (
                  <div>
                    <span className={css.technologies}>{technology}</span>
                  </div>
                );
              })}
          </div>
          <div className={css.headerImage}>
            <Image
              src={urlFor(displayImage).width().url()}
              width={600}
              height={400}
              priority
            />
          </div>
          <PortableText value={project.body} components={ptComponents} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const projectSlug = pageContext.query.slug;

  if (!projectSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "project" && slug.current == "${projectSlug}" ]{
      title,
      slug,
      "technologies": technologies[]->title,
      body, 
      mainImage,
      publishedAt
    }`
  );
  const sanityID = process.env.SANITY_ID
  const url = `https://${sanityID}.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const project = result.result[0];

  if (!project) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        project,
      },
    };
  }
};

export default Project;
