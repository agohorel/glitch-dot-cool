import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { StyledList, GatsbyLink, StyledButton, PageTitle } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Post = styled.div`
  padding: 2rem;
  background-color: #fff;
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
  }
`

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
      <Head title={props.pageContext.tag} />
      <PageTitle>posts tagged with "{props.pageContext.tag}"</PageTitle>
      <GatsbyLink to={"/posts"}>
        <StyledButton style={{ float: `right`, marginTop: `3px` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>
      <GatsbyLink to={"/tags"}>
        <StyledButton
          style={{ float: `right`, marginTop: `3px`, marginRight: `1rem` }}
        >
          view all tags
        </StyledButton>
      </GatsbyLink>
      <ol>
        {props.data.allContentfulBlogPost.edges.map(post => {
          return (
            <Post key={post.node.title}>
              <StyledList>
                <GatsbyLink to={`/${slugify(post.node.author)}/${post.node.slug}`}>
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
            </Post>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Tag
