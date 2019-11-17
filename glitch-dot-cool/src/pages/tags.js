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

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Tag = styled.div`
  display: inline-block;
  width: calc(50% - 1rem);
  padding: 1rem;
  background-color: #fff;
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
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
            <Tag key={tag.fieldValue}>
              <StyledList>
                <GatsbyLink to={`/tags/${slugify(tag.fieldValue)}`}>
                  <h2>{tag.fieldValue}</h2>
                </GatsbyLink>
              </StyledList>
            </Tag>
          )
        })}
      </TagContainer>
    </Layout>
  )
}

export default Tags
