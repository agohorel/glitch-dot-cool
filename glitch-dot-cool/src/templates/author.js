import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import { StyledLink, ListLink } from "../utils/utilComponents"
// import colors from "../styles/colors"
// import measurements from "../styles/measurements"

export const query = graphql`
    query($author: String!) {
        allContentfulBlogPost(filter: { author: { eq: $author } }) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                }
            }
        }
    }
`

const Tag = props => {
  return (
    <Layout>
      <h1>posts by "{props.pageContext.author}"</h1>
      <ol>
        {props.data.allContentfulBlogPost.edges.map(post => {
          return (
            <div key={post.node.title}>
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

export default Tag