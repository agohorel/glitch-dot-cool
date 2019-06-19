import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import {
  GatsbyLink,
  StyledList,
  PageTitle,
  StyledButton,
} from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Post = styled.div`
  padding: 1rem;
  background-color: #fff;
  margin-top: 1rem;

  :last-child {
    margin-bottom: 1rem;
  }
`

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            author
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="posts" />
      <PageTitle>posts</PageTitle>
      <GatsbyLink to={"/tags"}>
        <StyledButton style={{ float: `right`, marginTop: `3px` }}>
          view all tags
        </StyledButton>
      </GatsbyLink>
      <ol>
        {data.allContentfulBlogPost.edges.map(post => {
          return (
            <Post key={post.node.title}>
              <StyledList>
                <GatsbyLink to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                </GatsbyLink>
              </StyledList>
              <p>{post.node.publishedDate}</p>
              <StyledList>
                {`by `}
                <GatsbyLink to={`/${slugify(post.node.author)}/posts`}>
                  <strong>{post.node.author}</strong>
                </GatsbyLink>
              </StyledList>
            </Post>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Posts
