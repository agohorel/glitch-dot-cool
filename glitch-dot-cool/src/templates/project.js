import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { PageTitle, StyledButton, Centered } from "../utils/utilComponents"
import measurements from "../styles/measurements"

const Project = styled.div`
  display: block;
  max-width: 67%;
  margin: 2rem auto ${measurements.footerHeight}rem auto;

  img {
    display: block;
    margin: 1rem auto;
    max-width: 75%;
  }

  p {
    margin-bottom: 1rem;
  }
`

const Img = styled.img`
  max-width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  button:not(:last-child) {
    margin-right: 2rem;
  }
`

export const query = graphql`
  query($project: String!) {
    contentfulProject(title: { eq: $project }) {
      title
      releaseDate(formatString: "MMMM Do YYYY")
      downloadLink
      torrentLink
      body {
        json
      }
      artwork {
        file {
          fileName
          url
        }
      }
    }
  }
`

const Tag = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulProject.title} />
      <Project>
        <Centered>
          <PageTitle>{props.data.contentfulProject.title}</PageTitle>
        </Centered>
        <Img
          src={props.data.contentfulProject.artwork.file.url}
          alt={props.data.contentfulProject.artwork.file.fileName}
        />
        <ButtonWrapper>
          <StyledButton src={props.data.contentfulProject.downloadLink}>
            download
          </StyledButton>
          <StyledButton src={props.data.contentfulProject.torrentLink}>
            torrent
          </StyledButton>
        </ButtonWrapper>
        {documentToReactComponents(props.data.contentfulProject.body.json)}
      </Project>
    </Layout>
  )
}

export default Tag
