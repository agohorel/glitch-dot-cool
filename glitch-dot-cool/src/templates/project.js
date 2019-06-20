import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import {PageTitle, StyledButton} from "../utils/utilComponents"
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
    margin-top: 1rem;
  }
`

const Img = styled.img`
  max-width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

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
      <Project>
        <PageTitle>{props.data.contentfulProject.title}</PageTitle>
        <Img
          src={props.data.contentfulProject.artwork.file.url}
          alt={props.data.contentfulProject.artwork.file.fileName}
        />
        <Head title={props.data.contentfulProject.title} />
        {documentToReactComponents(props.data.contentfulProject.body.json)}
        <ButtonWrapper>
          <StyledButton src={props.data.contentfulProject.downloadLink}>download</StyledButton>
          <StyledButton src={props.data.contentfulProject.torrentLink}>torrent</StyledButton>
        </ButtonWrapper>
      </Project>
    </Layout>
  )
}

export default Tag
