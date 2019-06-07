import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import colors from "../styles/colors"
import measurements from "../styles/measurements"
import { slugify } from "../utils/utils"
import { StyledLink, ListLink } from "../utils/utilComponents";

const BlogPost = styled.div`
  margin-top: 2rem;
  margin-bottom: ${measurements.footerHeight}rem;
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
    },
  }

  let authorSlug = `/${slugify(props.data.contentfulBlogPost.author)}/posts`;

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>
        {`by `} 
        <strong>
          <StyledLink>
            <ListLink to={authorSlug}>{props.data.contentfulBlogPost.author}</ListLink>
          </StyledLink>
        </strong>
      </p>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <BlogPost>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </BlogPost>
      {props.data.contentfulBlogPost.tags.map(tag => {
        return (
          <BlogTag key={tag}>
            <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>
          </BlogTag>
        )
      })}
    </Layout>
  )
}

export default Blog
