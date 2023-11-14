import React from "react";
import css from "../../styles/articles.module.css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import Link from "next/link";
import Image from "next/image";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Article({ post, date }) {
  return (
    <div className={css.article}>
      <div>
        <div className={css.authorDeets}>
          <span className={css.readTime}>{date}</span>
          <span className={css.seperator}>.</span>
          <span className={css.readTime}>{post.readTime}</span>
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
          {/* {post.description.length > 250
            ? `${post.description.substring(0, 250)}...`
            : post.description} */}
        </div>
        <div className={css.categories}>
          {post.categories &&
            post.categories.map((category, key) => {
              return (
                <div key={key}>
                  <span>{category}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Article;
