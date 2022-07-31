import React from "react";
import { useRouter } from "next/router";
import groq from "groq";
import client from "../../client";
import { useGlobalContext } from "../../contexts/context";
import css from "../../styles/articles.module.css";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Article from "../../components/Articles/article";

function Learnings({ posts }) {
  console.log(posts);
  const { theme } = useGlobalContext();
  console.log(posts[0].publishedAt);

  

  return (
    <div className={css.articlesContainer} id={theme}>
      <div>
        <div className={css.title}>
          <h1>My Learnings</h1>
          <span>outletting my process 🖋</span>
        </div>
        {posts.length > 0 &&
          posts.map((post, key) => {
            let postdate = post.publishedAt;
            let formattedDate = format(new Date(postdate), "do LLLL yyyy");

            return (
              <Article post={post} date={formattedDate} key={key}/>
            );
          })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc){
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body,
      publishedAt,
      mainImage,
      readTime,
      slug, 
      description
      }
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Learnings;
