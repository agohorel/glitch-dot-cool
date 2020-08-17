import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import measurements from "../../styles/measurements"
import Layout from "../layout"
import Head from "../head"
import Post from "../Post"
import Project from "../Project"

const Home = ({ posts }) => {
  return (
    <Layout>
      <Head title="home" />

      <PostsContainer>
        {posts.map(post => {
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

export default Home

const PostsContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));

  :last-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: ${measurements.breakpointMobileNav}px) {
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
