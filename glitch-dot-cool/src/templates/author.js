import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import Profile from "../components/profile"
import { StyledList, GatsbyLink, ProfileWrapper } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Author = ({ data: { contentfulAuthor, allContentfulBlogPost } }) => {
  return (
    <Layout>
      <Head title={contentfulAuthor.authorName} />
      <ProfileWrapper>
        <Profile profileData={contentfulAuthor} />

        <Posts>
          <h1>posts:</h1>
          <ol>
            {allContentfulBlogPost.edges.map(post => {
              return (
                <Post key={post.node.title}>
                  <StyledList>
                    <GatsbyLink
                      to={`/${slugify(post.node.author)}/${post.node.slug}`}
                    >
                      <h3>{post.node.title}</h3>
                    </GatsbyLink>
                  </StyledList>
                  <p>{post.node.publishedDate}</p>
                </Post>
              )
            })}
          </ol>
        </Posts>
      </ProfileWrapper>
    </Layout>
  )
}

export default Author

export const query = graphql`
  query($author: String!) {
    contentfulAuthor(authorName: { eq: $author }) {
      authorName
      contactEmail
      location
      avatar {
        file {
          url
        }
        fluid(maxWidth: 100) {
          base64
          sizes
          src
          srcSet
          aspectRatio
        }
      }
      links {
        internal {
          content
        }
      }
    }
    allContentfulBlogPost(filter: { author: { eq: $author } }) {
      edges {
        node {
          title
          slug
          author
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

const Posts = styled.div`
  display: inline-block;
  padding: 4rem;
  background-color: #fff;
  flex-grow: 1;

  @media only screen and (max-width: 960px) {
    margin-bottom: 3rem;
  }
`

const Post = styled.div`
  margin-top: 0.5rem;
`
