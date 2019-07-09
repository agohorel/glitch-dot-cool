import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyLink, PageTitle } from "../utils/utilComponents"

const Post = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  background-color: #fff;
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`

const Textbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const ImageHover = styled.div`
transition: .2s ease filter;
  :hover {
    filter: invert(100%);
  }
`

const imgStyles = {
  width: `14rem`,
  marginRight: `2rem`,
  transition: `.2s ease all`,
}

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do YYYY")
            artwork {
              title
              file {
                url
                fileName
              }
              fluid(maxWidth: 250) {
                base64
                sizes
                src
                srcSet
                aspectRatio
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="projects" />
      <PageTitle>projects</PageTitle>
      <ol>
        {data.allContentfulProject.edges.map(post => {
          return (
            <Post key={post.node.title}>
              <GatsbyLink to={`/projects/${post.node.slug}`}>
                <ImageHover>
                  <Image style={imgStyles} fluid={post.node.artwork.fluid} />
                </ImageHover>
              </GatsbyLink>

              <Textbox>
                <GatsbyLink to={`/projects/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                </GatsbyLink>
                <p>{post.node.publishedDate}</p>
              </Textbox>
            </Post>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Posts
