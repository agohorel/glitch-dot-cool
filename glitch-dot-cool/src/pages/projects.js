import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

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

const Img = styled.img`
  max-width: 14rem;
  max-height: 14rem;
  width: auto;
  margin-right: 2rem;
  transition: .2s ease all;

  :hover {
    filter: invert(100%);
  }
`

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
                <Img
                  src={post.node.artwork.file.url}
                  alt={post.node.artwork.title}
                />
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
