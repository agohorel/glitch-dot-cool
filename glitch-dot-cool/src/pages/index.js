import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import Head from "../components/head"
import Post from "../components/Post"
import Project from "../components/Project"

const PostsContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));

  :last-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2.2rem;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        filter: { frontPageAnnouncement: { eq: true } }
      ) {
        edges {
          node {
            frontPageAnnouncement
            thumbnail {
              fluid(quality: 50, maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            title
            author
            slug
            body {
              json
            }
            publishedDate
            id
          }
        }
      }
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            artwork {
              file {
                url
                fileName
              }
              fluid(quality: 50, maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            slug
            title
            publishedDate
            id
          }
        }
      }
    }
  `)

  let allPosts = []

  data.allContentfulBlogPost.edges.forEach(blogPost => {
    blogPost.type = "blogPost"
    allPosts.push(blogPost)
  })

  data.allContentfulProject.edges.forEach(project => {
    project.type = "project"
    allPosts.push(project)
  })

  allPosts.sort((a, b) => {
    return new Date(b.node.publishedDate) - new Date(a.node.publishedDate)
  })

  return (
    <Layout>
      <Head title="home" />

      <PostsContainer>
        {allPosts.map(post => {
          if (post.type === "blogPost") {
            let { thumbnail } = post.node

            if (thumbnail) {
              return (
                <BackgroundImage key={post.node.id} fluid={thumbnail.fluid}>
                  <Post post={post} />
                </BackgroundImage>
              )
            } else {
              return <Post key={post.node.id} post={post} />
            }
          } else if (post.type === "project") {
            let img = post.node.artwork.fluid
            return (
              <BackgroundImage key={post.node.id} fluid={img}>
                <Project post={post} />
              </BackgroundImage>
            )
          }
          return null
        })}
      </PostsContainer>
    </Layout>
  )
}
