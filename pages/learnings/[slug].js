import React, { useEffect, useState } from "react";
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'



function Post({ title, body, image }) {
  console.log(title, body, image);


  function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }
  

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <img src={urlFor(image).width(200).url()} />
        <div>
          <PortableText value={body} />
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
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
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
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};

export default Post;
