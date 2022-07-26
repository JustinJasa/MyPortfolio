import React from "react";
import css from '../../styles/articles.module.css'
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import Link from "next/link";
import Image from 'next/image'

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

function Article({post, date}) {
  return (
    <div className={css.article}>
      <div>
        <div className={css.authorDeets}>
          <div className={css.authorImage}>
            <Image
              src={urlFor(post.authorImage.asset._ref).width().url()}
              className={css.authorImage}
              width={40}
              height={40}
            />
          </div>
          <span className={css.authorName}>{post.name}</span>
          <span className={css.seperator}>.</span>
          <span className={css.readTime}>{post.readTime}</span>
          <span className={css.seperator}>.</span>
          <span className={css.readTime}>{date}</span>
        </div>
        <div>
          <h2 className={css.articleTitle}>
            <Link
              href="/learnings/[slug]"
              as={`/learnings/${post.slug.current}`}
            >
              {post.title}
            </Link>
          </h2>
        </div>
        <div className={css.desc}>
          {post.description.length > 250
            ? `${post.description.substring(0, 250)}...`
            : post.description}
        </div>
        <div className={css.categories}>
          {post.categories &&
            post.categories.map((category) => {
              return (
                <div>
                  <span>{category}</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className={css.headerImage}>
        <Image
          src={urlFor(post.mainImage.asset._ref).width().url()}
          alt="main-image"
          className={css.articleImage}
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Article;
