import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyLink, StyledButton, PageTitle } from "../utils/utilComponents"
import { slugify } from "../utils/utils"
import colors from "../styles/colors"

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Tag = styled(GatsbyLink)`
  display: inline-block;
  width: calc(50% - 1rem);
  padding: 1rem;
  background-color: #fff;
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: ${colors.lightgrey};
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="tags" />
      <PageTitle>tags</PageTitle>
      <GatsbyLink to={"/posts"}>
        <StyledButton style={{ marginTop: `1rem` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>
      <TagContainer>
        {data.allContentfulBlogPost.group.map(tag => {
          return (
            <Tag to={`/tags/${slugify(tag.fieldValue)}`} key={tag.fieldValue}>
              <h2>{tag.fieldValue}</h2>
            </Tag>
          )
        })}
      </TagContainer>
    </Layout>
  )
}

export default Tags
