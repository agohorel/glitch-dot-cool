import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import { StyledList, ListLink, StyledLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"
// import colors from "../styles/colors"
// import measurements from "../styles/measurements"

export const query = graphql`
  query($tag: String!) {
    allContentfulBlogPost(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          tags
          slug
          title
          author
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

const Tag = props => {

  return (
    <Layout>
      <h1>posts tagged with "{props.pageContext.tag}"</h1>
      <ol>
        {props.data.allContentfulBlogPost.edges.map(post => {
          return (
            <div key={post.node.title}>
              <StyledList>
                <ListLink to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                </ListLink>
              </StyledList>
              <p>
                by{" "}
                <StyledLink>
                  <ListLink to={`/${slugify(post.node.author)}/posts`}>
                    {post.node.author}
                  </ListLink>
                </StyledLink>
                {` - ${post.node.publishedDate}`}
              </p>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Tag
