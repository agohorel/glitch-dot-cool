import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { PageTitle, StyledLinkButton, Centered } from "../utils/utilComponents"
import measurements from "../styles/measurements"

const ProjectWrapper = styled.div`
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

  @media only screen and (max-width: 900px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 500px) {
    max-width: 100%;
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

  a:not(:last-child) {
    margin-right: 2rem;
  }
`

export const query = graphql`
  query($project: String!) {
    contentfulProject(title: { eq: $project }) {
      title
      publishedDate(formatString: "MMMM Do YYYY")
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

const Project = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulProject.title} />
      <ProjectWrapper>
        <Centered>
          <PageTitle style={{ textAlign: `center` }}>
            {props.data.contentfulProject.title}
          </PageTitle>
        </Centered>
        <Img
          src={props.data.contentfulProject.artwork.file.url}
          alt={props.data.contentfulProject.artwork.file.fileName}
        />
        <ButtonWrapper>
          <StyledLinkButton
            href={props.data.contentfulProject.downloadLink}
            target={`_blank`}
          >
            download
          </StyledLinkButton>
          <StyledLinkButton
            href={props.data.contentfulProject.torrentLink}
            target={`_blank`}
          >
            torrent
          </StyledLinkButton>
        </ButtonWrapper>
        {documentToReactComponents(props.data.contentfulProject.body.json)}
      </ProjectWrapper>
    </Layout>
  )
}

export default Project
