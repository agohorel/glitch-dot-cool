import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { GatsbyLink, StyledList } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Avatar = styled.img`
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  display: inline;
  transition: 0.2s ease opacity;

  :hover {
    opacity: 0.5;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const ListStyle = {
  marginTop: ".5rem",
}

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
      <h1>authors</h1>
      <ol>
        {data.allContentfulAuthor.edges.map(post => {
          return (
            <Wrapper key={post.node.authorName} style={ListStyle}>
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
