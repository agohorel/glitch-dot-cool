import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import { GatsbyLink, StyledButton, PageTitle } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Members = () => {
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
                ...GatsbyContentfulFluid
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
      <Head title="members" />
      <PageTitle>members</PageTitle>

      <GatsbyLink to={"/posts"}>
        <StyledButton style={{ marginTop: `1rem` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>

      <CardWrapper>
        {data.allContentfulAuthor.edges.map(post => {
          return (
            <MemberCard
              key={post.node.authorName}
              to={`/${slugify(post.node.authorName)}/posts`}
            >
              <Avatar fluid={post.node.avatar.fluid} />

              <h2>{post.node.authorName}</h2>
            </MemberCard>
          )
        })}
      </CardWrapper>
    </Layout>
  )
}

export default Members

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const MemberCard = styled(GatsbyLink)`
  display: flex;
  width: calc(50% - 1rem);
  align-items: center;
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${props => props.theme.colors.scale_6};

  h2 {
    display: inline-block;
  }

  &:hover {
    background-color: ${props => props.theme.colors.scale_2};
    color: ${props => props.theme.colors.scale_5};
  }

  @media (max-width: 1000px) {
    width: 100%;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
`

const Avatar = styled(Image)`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease-out opacity;

  &:hover {
    opacity: 0.5;
  }
`
