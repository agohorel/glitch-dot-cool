import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import colors from "../styles/colors"
import measurements from "../styles/measurements"
import { slugify } from "../utils/utils"
import { StyledList, GatsbyLink } from "../utils/utilComponents"

const BlogHeader = styled.div`
  margin-bottom: 1rem;
`

const BlogPost = styled.div`
  display: block;
  max-width: 67%;
  margin: 2rem auto ${measurements.footerHeight}rem auto;
  // margin-top: 2rem;
  // margin-bottom: ${measurements.footerHeight}rem;

  img {
    display: block;
    margin: 1rem auto;
    max-width: 100%;
  }

  code {
    font-family: "Roboto Mono", monospace;
  }
`
const BlogTags = styled.div`
  margin-top: 2rem;
`

const BlogTag = styled.div`
  display: inline-block;
  background-color: ${colors.lightgrey};
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;

  a {
    font-size: 0.8rem;
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
  }
`

const Blog = props => {
  // config for setting up embedded imgs
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
      paragraph: node => {
        // console.log(node)
        return node.content.map(contentItem => {
          console.log(contentItem)
          if (
            contentItem.marks.length &&
            contentItem.marks[0].type === "code"
          ) {
            console.log(`found some code: ${contentItem.value}`)
            return (
              <pre>
                <code>{contentItem.value}</code>
              </pre>
            )
          } else {
            return <p>{contentItem.value}</p>
          }
        })
      },
    }
  }

  let authorSlug = `/${slugify(props.data.contentfulBlogPost.author)}/posts`

  return (
    <Layout>
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
          props.data.contentfulBlogPost.body.json,
          options
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
