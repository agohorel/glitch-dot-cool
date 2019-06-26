import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { PageTitle, StyledLinkButton, Centered } from "../utils/utilComponents"
import { renderOptions } from "../utils/utils"
import measurements from "../styles/measurements"
import colors from "../styles/colors"

const ProjectWrapper = styled.div`
  display: block;
  max-width: 67%;
  margin: 2rem auto ${measurements.footerHeight}rem auto;

  img {
    max-width: 75%;
  }

  p {
    margin-bottom: 1rem;
  }

  code {
    font-family: "Roboto Mono", monospace;
    font-size: 0.8rem;

    // style nested elements within code block
    * {
      font-family: inherit;
      font-size: inherit;
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 90%;

    img {
      max-width: 85%;
    }
  }

  @media only screen and (max-width: 500px) {
    max-width: 100%;

    img {
      max-width: 90%;
    }
  }
`

const DatePublished = styled.p`
  display: inline-block;
  font-size: .8rem;
  margin-top: .5rem;
  padding: .5rem;
  background-color: ${colors.lightgrey};
  color: ${colors.midgrey};
`

const Img = styled.img`
  display: block;
  margin: 1rem auto;
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
        <Centered column>
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
        {documentToReactComponents(props.data.contentfulProject.body.json, renderOptions)}
        <DatePublished>
          released {props.data.contentfulProject.publishedDate}
        </DatePublished>
      </ProjectWrapper>
    </Layout>
  )
}

export default Project
