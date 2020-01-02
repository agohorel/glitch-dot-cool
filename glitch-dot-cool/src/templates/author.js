import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import Profile from "../components/profile"
import PostCard from "../components/PostCard"

export const query = graphql`
  query($author: String!) {
    allContentfulAuthor(filter: { authorName: { eq: $author } }) {
      edges {
        node {
          authorName
          contactEmail
          location
          avatar {
            file {
              url
            }
            fluid(maxWidth: 100) {
              ...GatsbyContentfulFluid
            }
          }
          links {
            internal {
              content
            }
          }
        }
      }
    }
    allContentfulBlogPost(
      filter: { author: { eq: $author } }
      sort: { fields: publishedDate, order: DESC }
    ) {
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

const Author = props => {
  return (
    <Layout>
      <Head title={props.data.allContentfulAuthor.edges[0].node.authorName} />
      <Wrapper>
        <Profile props={props} />

        <Posts>
          <h1>posts:</h1>
          {props.data.allContentfulBlogPost.edges.map(post => {
            return <PostCard post={post} key={post.node.slug} />
          })}
        </Posts>
      </Wrapper>
    </Layout>
  )
}

export default Author

const Wrapper = styled.div`
  margin-top: 6rem;
  display: flex;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 2rem;
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
