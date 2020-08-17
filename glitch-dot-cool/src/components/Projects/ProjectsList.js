import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../Layout/layout"
import Head from "../Layout/head"
import { GatsbyLink, PageTitle } from "../../utils/utilComponents"

const ProjectsList = ({ projects }) => {
  return (
    <Layout>
      <Head title="projects" />
      <PageTitle>projects</PageTitle>

      {projects.map(post => {
        return (
          <GatsbyLink key={post.node.title} to={`/projects/${post.node.slug}`}>
            <Post>
              <ImageHover>
                <Image style={imgStyles} fluid={post.node.artwork.fluid} />
              </ImageHover>

              <Textbox>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Textbox>
            </Post>
          </GatsbyLink>
        )
      })}
    </Layout>
  )
}

export default ProjectsList

const Post = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  background-color: #fff;
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
  }

  :hover {
    background: ${props => props.theme.colors.scale_2};
    color: ${props => props.theme.colors.scale_5};
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
  transition: 0.2s ease filter;
  :hover {
    filter: invert(100%);
  }
`

const imgStyles = {
  width: `14rem`,
  marginRight: `2rem`,
  transition: `.2s ease all`,
}
