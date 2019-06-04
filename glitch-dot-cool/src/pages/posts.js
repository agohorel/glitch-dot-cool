import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { ListLink, StyledLink } from "../utils/utils";

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
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
            <div key={post.node.id}>
              <StyledLink>
                <ListLink to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                </ListLink>
              </StyledLink>
              <p>{post.node.publishedDate}</p>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Posts;