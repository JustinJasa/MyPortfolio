import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import css from "../../styles/article.module.css";
import { useGlobalContext } from "../../contexts/context";
import { format } from "date-fns";
import Image from 'next/image'

function Post({ post }) {
  let author = post.authorImage.asset._ref;
  let biography = post.bio[0].children[0].text;
  let primaryImage = post.mainImage.asset._ref;
  const { theme } = useGlobalContext();

  let date = post.publishedAt.toString();
  let formattedDate = format(new Date(date), "do LLLL yyyy");
  let readTime = post.readTime;

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  // const myLoader = ({ src, width, quality }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  // }

  return (
    <div className={css.container} id={theme}>
      <div className={css.blog}>
        <div className={css.authorContainer}>
          <div className={css.authImageContainer}>
            <Image
              className={css.authorImage}
              src={urlFor(author).width().url()}
              width={60}
              height={60}
            />
          </div>
          <div className={css.authorInfo}>
            <span className={css.authorName}>{post.name}</span>
            {/* <div className={css.authorBio}>
            <p>{biography}</p>
          </div> */}
            <div className={css.blogInfo}>
              <span className={css.postDate}>{formattedDate}</span>
              <div className={css.seperator}>
                <span>.</span>
              </div>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        <div className={css.blogContent}>
          <h1 className={css.blogTitle}>{post.title}</h1>
          <div className={css.categoriesContainer}>
            {post.categories &&
              post.categories.map((category) => {
                return (
                  <div>
                    <span className={css.categories}>{category}</span>
                  </div>
                );
              })}
          </div>
          {primaryImage && (
            <div className={css.headerImage}>
              <Image src={urlFor(primaryImage).width().url()} width={600} height={400} priority/>
            </div>
          )}
          <div className={css.content}>
            <PortableText value={post.body} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body,
      "bio": author->bio,
      publishedAt,
      mainImage,
      readTime
    }`
  );
  const url = `https://48839dfn.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post,
      },
    };
  }
};

export default Post;
