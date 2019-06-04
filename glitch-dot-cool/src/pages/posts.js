import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { ListLink, StyledLink } from "../utils/utils";

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
        <h1>posts</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <div key={post.node.id}>
                <StyledLink>
                  <ListLink to={`/blog${post.node.fields.slug}`}>
                    <h2>{post.node.frontmatter.title}</h2>
                  </ListLink>
                </StyledLink>
                <p>{post.node.frontmatter.date}</p>
              </div>   
            )
          })}
        </ol>
    </Layout>
  )
}

export default Posts;