import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
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
  margin-top: 2rem;
`

const avatarStyles = {
  display: `block`,
  width: `4rem`,
  height: `4rem`,
  borderRadius: `50%`,
  marginRight: `1rem`,
  transition: `0.2s ease opacity`,
  hover: `opacity: `,
}

const AvatarHover = styled.div`
  * {
    :hover {
      opacity: 0.5;
    }
  }
`

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAuthor {
        edges {
          node {
            authorName
            fields {
              authorNameLowerCase
            }
            avatar {
              file {
                url
                fileName
              }
              fluid(maxWidth: 75) {
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
    }
  `)

  data.allContentfulAuthor.edges.sort((a, b) => {
    if (a.node.fields.authorNameLowerCase < b.node.fields.authorNameLowerCase)
      return -1
    if (a.node.fields.authorNameLowerCase > b.node.fields.authorNameLowerCase)
      return 1
    return 0
  })

  return (
    <Layout>
      <Head title="feeds" />
      <PageTitle>feeds</PageTitle>

      <GatsbyLink to={"/posts"}>
        <StyledButton style={{ marginTop: `1rem` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>

      <ol>
        {data.allContentfulAuthor.edges.map(post => {
          return (
            <Wrapper key={post.node.authorName}>
              <GatsbyLink to={`/${slugify(post.node.authorName)}/posts`}>
                <AvatarHover>
                  <Image style={avatarStyles} fluid={post.node.avatar.fluid} />
                </AvatarHover>
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
