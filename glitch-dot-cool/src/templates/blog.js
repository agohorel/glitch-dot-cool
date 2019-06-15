import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "prismjs/themes/prism-coy.css"
import Prism from "prismjs"

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

  img {
    display: block;
    margin: 1rem auto;
    max-width: 100%;
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
      // setup for styling code blocks
      paragraph: node => {
        if (typeof window !== `undefined`) {
          setTimeout(() => {
            Prism.highlightAll()
          }, 200)
        }

        return node.content.map(contentItem => {
          if (
            contentItem.marks.length &&
            contentItem.marks[0].type === "code"
          ) {
            // pull out language specified as first line of code block to set language
            let lang = contentItem.value.split("\n")[0].trim()
            // remove language declaration from actual code block
            let code = contentItem.value.replace(lang, "").trim()
            return (
              <pre
                className={`language-${lang}`}
                key={`${contentItem.value.substring(0, 10)}-pre`}
              >
                <code
                  className={`language-${lang}`}
                  key={`${contentItem.value.substring(0, 10)}-codeblock`}
                >
                  {code}
                </code>
              </pre>
            )
          } else {
            return (
              <p key={contentItem.value.substring(0, 10)}>
                {contentItem.value}
              </p>
            )
          }
        })
      },
    },
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
