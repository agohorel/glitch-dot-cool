import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { GatsbyLink, StyledList } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            author
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>posts</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map(post => {
          return (
            <div key={post.node.title}>
              <StyledList>
                <GatsbyLink to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                </GatsbyLink>
              </StyledList>
              <p>{post.node.publishedDate}</p>
              <StyledList>
                {`by `}
                <GatsbyLink to={`/${slugify(post.node.author)}/posts`}>
                  <strong>{post.node.author}</strong>
                </GatsbyLink>
              </StyledList>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Posts
