import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"
import DistroLinks from "../components/distroLinks"
import { PageTitle, StyledLinkButton, Centered } from "../utils/utilComponents"
import { renderOptions } from "../utils/utils"
import measurements from "../styles/measurements"
import colors from "../styles/colors"

const ProjectWrapper = styled.div`
  display: block;
  max-width: 67%;
  margin: 4rem auto ${measurements.footerHeight}rem auto;

  p {
    margin-bottom: 2rem;
  }

  code {
    font-family: "Roboto Mono", monospace;
    font-size: 1.6rem;

    // style nested elements within code block
    * {
      font-family: inherit;
      font-size: inherit;
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 500px) {
    max-width: 100%;
  }
`

const DatePublished = styled.p`
  display: inline-block;
  font-size: 1.6rem;
  padding: 1rem;
  background-color: ${colors.lightgrey};
  color: ${colors.midgrey};
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  a:not(:last-child) {
    margin-right: 4rem;
  }
`

export const query = graphql`
  query($project: String!) {
    contentfulProject(title: { eq: $project }) {
      title
      publishedDate(formatString: "MMMM Do YYYY")
      downloadLink
      torrentLink
      distroLinks {
        internal {
          content
        }
      }
      body {
        json
      }
      artwork {
        fluid(maxWidth: 900) {
          base64
          src
          srcSet
          aspectRatio
          sizes
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          file {
            fileName
          }
          fluid {
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
`

const Project = props => {
  // setup images for use with gatsby-image
  let projectContent = props.data.contentfulProject.body.json

  projectContent.content.forEach(contentItem => {
    if (contentItem.nodeType === "embedded-asset-block") {
      props.data.allContentfulAsset.edges.forEach(asset => {
        if (
          contentItem.data.target.fields.file["en-US"].fileName ===
          asset.node.file.fileName
        ) {
          contentItem.img = asset.node.fluid
        }
      })
    }
  })

  // make valid JSON from distroLinks string content
  let parsedDistroLinks = JSON.parse(
    props.data.contentfulProject.distroLinks.internal.content
  )
  return (
    <Layout>
      <Head title={props.data.contentfulProject.title} />
      <ProjectWrapper>
        <Centered column>
          <PageTitle style={{ textAlign: `center`, marginBottom: `1rem` }}>
            {props.data.contentfulProject.title}
          </PageTitle>
        </Centered>
        <Image fluid={props.data.contentfulProject.artwork.fluid} />
        <ButtonWrapper>
          {props.data.contentfulProject.downloadLink ? (
            <StyledLinkButton
              href={props.data.contentfulProject.downloadLink}
              target={`_blank`}
            >
              download
            </StyledLinkButton>
          ) : null}

          {props.data.contentfulProject.torrentLink ? (
            <StyledLinkButton
              href={props.data.contentfulProject.torrentLink}
              target={`_blank`}
            >
              torrent
            </StyledLinkButton>
          ) : null}
        </ButtonWrapper>

        {documentToReactComponents(projectContent, renderOptions)}
        <DistroLinks props={parsedDistroLinks} />
        <DatePublished>
          released {props.data.contentfulProject.publishedDate}
        </DatePublished>
      </ProjectWrapper>
    </Layout>
  )
}

export default Project
