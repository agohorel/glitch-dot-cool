import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import {
  StyledList,
  GatsbyLink,
  StyledButton,
  PageTitle,
} from "../utils/utilComponents"
import { slugify, parseAuthorLinks } from "../utils/utils"

const Tag = props => {
  return (
    <Layout>
      <Head title={props.pageContext.tag} />
      <PageTitle>posts tagged with "{props.pageContext.tag}"</PageTitle>
      <GatsbyLink to={"/posts"}>
        <StyledButton style={{ marginTop: `1rem` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>
      <GatsbyLink to={"/tags"}>
        <StyledButton style={{ marginTop: `1rem`, marginLeft: `1rem` }}>
          view all tags
        </StyledButton>
      </GatsbyLink>
      <ol>
        {props.data.allContentfulBlogPost.edges.map(post => {
          const authors = parseAuthorLinks(post.node.author)
          return (
            <Post key={post.node.title}>
              <StyledList>
                <GatsbyLink
                  to={`/${slugify(authors[0].name)}/${post.node.slug}`}
                >
                  <h2>{post.node.title}</h2>
                </GatsbyLink>
              </StyledList>

              <Authors>
                <p style={{ display: "inline" }}>{`by: `}</p>
                {authors.map((author, idx) => {
                  if (idx < authors.length - 1) {
                    return (
                      <GatsbyLink to={author.slug}>
                        <h3>
                          <strong>{author.name},</strong>
                        </h3>
                      </GatsbyLink>
                    )
                  } else {
                    return (
                      <GatsbyLink to={author.slug}>
                        <h3>
                          <strong>{author.name}</strong>
                        </h3>
                      </GatsbyLink>
                    )
                  }
                })}
                <p
                  style={{ display: "inline" }}
                >{` - ${post.node.publishedDate}`}</p>
              </Authors>
            </Post>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Tag

export const query = graphql`
  query($tag: String!) {
    allContentfulBlogPost(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          tags
          slug
          title
          author
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

const Post = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.scale_6};
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
  }
`

const Authors = styled.div`
  p,
  h3 {
    display: inline;
    transition: 0s;
  }

  a:hover,
  h2:hover,
  h3:hover {
    color: ${props => props.theme.colors.scale_4};
  }
`
