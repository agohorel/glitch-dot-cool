import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import { StyledList, GatsbyLink, StyledButton, PageTitle } from "../utils/utilComponents"
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
      <PageTitle>posts tagged with "{props.pageContext.tag}"</PageTitle>
      <GatsbyLink to={"/"}>
        <StyledButton style={{ float: `right`, marginTop: `3px` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>
      <ol>
        {props.data.allContentfulBlogPost.edges.map(post => {
          return (
            <div key={post.node.title}>
              <StyledList>
                <GatsbyLink to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                </GatsbyLink>
              </StyledList>
              <p>
                by{" "}
                <StyledList>
                  <GatsbyLink to={`/${slugify(post.node.author)}/posts`}>
                    {post.node.author}
                  </GatsbyLink>
                </StyledList>
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
