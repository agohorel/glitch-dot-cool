import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import {
  GatsbyLink,
  StyledList,
  StyledButton,
  PageTitle,
} from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

const Avatar = styled.img`
  display: block;
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  transition: 0.2s ease opacity;

  :hover {
    opacity: 0.5;
  }
`

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAuthor {
        edges {
          node {
            authorName
            avatar {
              file {
                url
                fileName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="feeds"/>
      <PageTitle>feeds</PageTitle>

      <GatsbyLink to={"/posts"}>
        <StyledButton style={{ float: `right`, marginTop: `3px` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>

      <ol>
        {data.allContentfulAuthor.edges.map(post => {
          return (
            <Wrapper key={post.node.authorName}>
              <GatsbyLink to={`/${slugify(post.node.authorName)}/posts`}>
                <Avatar
                  src={post.node.avatar.file.url}
                  alt={post.node.avatar.file.fileName}
                />
              </GatsbyLink>

              <StyledList>
                <GatsbyLink to={`/${slugify(post.node.authorName)}/posts`}>
                  <h2>{post.node.authorName}</h2>
                </GatsbyLink>
              </StyledList>
            </Wrapper>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Posts
