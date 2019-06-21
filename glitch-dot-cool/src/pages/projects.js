import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyLink, PageTitle } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Post = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  background-color: #fff;
  margin-top: 1rem;

  :last-child {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`

const Textbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
//   justify-content: space-between;
`

const Img = styled.img`
  max-width: 7rem;
  max-height: 7rem;
  margin-right: 1rem;
`

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: releaseDate, order: DESC }) {
        edges {
          node {
            title
            releaseDate(formatString: "MMMM Do YYYY")
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
      <Head title="posts" />
      <PageTitle>projects</PageTitle>
      <ol>
        {data.allContentfulProject.edges.map(post => {
          return (
            <Post key={post.node.title}>
              <Img
                src={post.node.artwork.file.url}
                alt={post.node.artwork.title}
              />
              <Textbox>
                <GatsbyLink to={`/projects/${slugify(post.node.title)}`}>
                  <h2>{post.node.title}</h2>
                </GatsbyLink>
                <p>{post.node.releaseDate}</p>
              </Textbox>
            </Post>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Posts
