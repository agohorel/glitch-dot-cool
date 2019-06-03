import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
  allMarkdownRemark {
    edges {
      node {
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
            {data.allMarkdownRemark.edges.map( (post) => {
                return (
                    <li key={post.node.id}>
                        <h2>{post.node.frontmatter.title}</h2>
                        <p>{post.node.frontmatter.date}</p>
                    </li>
                )
            })}
        </ol>
    </Layout>
  )
}

export default Posts;