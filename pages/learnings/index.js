import React from 'react'
import { useRouter } from 'next/router'
import groq from 'groq'
import client from '../../client'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'



function Learnings({posts}) {

  console.log(posts)
  console.log(posts[0].mainImage.asset._ref)

  function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

  return (
    <article>
      <div>
        <h1>Welcome to a blog!</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '', mainImage }) =>
            slug && (
              <li key={_id}>
                <Link href="/learnings/[slug]" as={`/learnings/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
                <img src={urlFor(mainImage.asset._ref).width(200).url()} alt="image" />
              </li>
            )
        )}
      </div>
    </article>
  )
}

export async function getStaticProps() {
 

  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Learnings