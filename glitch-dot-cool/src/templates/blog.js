import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "prismjs/themes/prism-coy.css"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import DistroLinks from "../components/Profile/distroLinks"
import colors from "../styles/colors"
import measurements from "../styles/measurements"
import { slugify, renderOptions } from "../utils/utils"
import { GatsbyLink } from "../utils/utilComponents"

const BlogPost = styled.div`
  display: block;
  width: calc(1920px - (65vw));
  max-width: 100%;
  transition: 0.2s ease-out all;

  @media only screen and (min-width: 1921px) {
    min-width: 600px;
  }

  margin: 4rem auto ${measurements.footerHeight}rem auto;

  h1,
  h2,
  h3 {
    :not(:first-child) {
      margin: 2rem 0 1rem 0;
    }
  }

  p,
  a {
    margin-bottom: 1.5rem;
  }

  code {
    margin-bottom: 2rem;
    font-family: "Roboto Mono", monospace;
    font-size: 1.6rem;

    // style nested elements within code block
    * {
      font-family: inherit;
      font-size: inherit;
    }
  }

  @media (max-width: 950px) {
    ol,
    ul,
    li {
      margin-left: 10px;
    }
  }
`

const BlogHeader = styled.div`
  p:first-of-type {
    margin-bottom: 0;
  }
`

const BlogTags = styled.div`
  margin-top: 2rem;
`

const BlogTag = styled.div`
  display: inline-block;
  background-color: ${colors.lightgrey};
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  margin-top: 1rem;

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
      links {
        internal {
          content
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
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Blog = props => {
  let authorSlug = `/${slugify(props.data.contentfulBlogPost.author)}/posts`
  let blogContent = props.data.contentfulBlogPost.body.json
  let parsedLinks

  if (props.data.contentfulBlogPost.links) {
    parsedLinks = JSON.parse(
      props.data.contentfulBlogPost.links.internal.content
    )
  }

  blogContent.content.forEach(contentItem => {
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

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <BlogPost>
        <BlogHeader>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>
            {`by `}
            <strong>
              <GatsbyLink to={authorSlug}>
                {props.data.contentfulBlogPost.author}
              </GatsbyLink>
            </strong>
          </p>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
        </BlogHeader>

        {documentToReactComponents(blogContent, renderOptions)}

        {parsedLinks !== undefined ? <DistroLinks props={parsedLinks} /> : null}

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
