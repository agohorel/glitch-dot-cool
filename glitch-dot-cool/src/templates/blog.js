import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "prismjs/themes/prism-coy.css"

import Layout from "../components/layout"
import Head from "../components/head"
import colors from "../styles/colors"
import measurements from "../styles/measurements"
import { slugify, renderOptions } from "../utils/utils"
import { StyledList, GatsbyLink } from "../utils/utilComponents"

const BlogHeader = styled.div`
  margin-bottom: 2rem;
`

const BlogPost = styled.div`
  display: block;
  max-width: 67%;
  margin: 4rem auto ${measurements.footerHeight}rem auto;

  img {
    display: block;
    margin: 2rem auto;
    max-width: 100%;
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

  @media only screen and (max-width: 1200px) {
    max-width: 80%;
    padding: 4rem 0 ${measurements.footerHeight}rem 0;
  }

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    padding: 4rem 0 ${measurements.footerHeight}rem 0;
  }
`
const BlogTags = styled.div`
  margin-top: 4rem;
`

const BlogTag = styled.div`
  display: inline-block;
  background-color: ${colors.lightgrey};
  padding: 0.5rem 1rem;
  margin-right: 1rem;

  a {
    font-size: 1.6rem;
    color: ${colors.darkgrey};
    transition: 0.2s ease color;
  }

  a:hover {
    color: ${colors.offwhite};
  }
`
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      tags
      author
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

const Blog = props => {
  let authorSlug = `/${slugify(props.data.contentfulBlogPost.author)}/posts`

  let blogContent = props.data.contentfulBlogPost.body.json

  blogContent.content.forEach(contentItem => {
    if (contentItem.nodeType === "embedded-asset-block") {
      props.data.allContentfulAsset.edges.forEach(asset => {
        if (contentItem.data.target.fields.file["en-US"].fileName === asset.node.file.fileName) {
          contentItem.img = asset.node.fluid
        }
      })
    }
  })

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <BlogPost>
        <BlogHeader>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>
            {`by `}
            <strong>
              <StyledList>
                <GatsbyLink to={authorSlug}>
                  {props.data.contentfulBlogPost.author}
                </GatsbyLink>
              </StyledList>
            </strong>
          </p>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
        </BlogHeader>

        {documentToReactComponents(
          // props.data.contentfulBlogPost.body.json,
          blogContent,
          renderOptions
        )}

        <BlogTags>
          {props.data.contentfulBlogPost.tags.map(tag => {
            return (
              <BlogTag key={tag}>
                <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>
              </BlogTag>
            )
          })}
        </BlogTags>
      </BlogPost>
    </Layout>
  )
}

export default Blog
