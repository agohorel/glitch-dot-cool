import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import Profile from "../components/profile"
import { StyledList, GatsbyLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Wrapper = styled.div`
  margin-top: 6rem;
  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`

const Posts = styled.div`
  display: inline-block;
  padding: 4rem;
  background-color: #fff;
  flex-grow: 1;

  // @media only screen and (max-width: 900px) {
  //   width: 100%;
  //   flex-grow: 0;
  // }
`

const Post = styled.div`
  margin-top: 0.5rem;
`

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

const Tag = props => {
  return (
    <Layout>
      <Head title={props.data.allContentfulAuthor.edges[0].node.authorName} />
      <Wrapper>
        <Profile props={props} />

        <Posts>
          <h1>posts:</h1>
          <ol>
            {props.data.allContentfulBlogPost.edges.map(post => {
              return (
                <Post key={post.node.title}>
                  <StyledList>
                    <GatsbyLink to={`/${slugify(post.node.author)}/${post.node.slug}`}>
                      <h3>{post.node.title}</h3>
                    </GatsbyLink>
                  </StyledList>
                  <p>{post.node.publishedDate}</p>
                </Post>
              )
            })}
          </ol>
        </Posts>
      </Wrapper>
    </Layout>
  )
}

export default Tag
