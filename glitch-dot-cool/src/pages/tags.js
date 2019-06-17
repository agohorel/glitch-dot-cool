import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import {
  GatsbyLink,
  StyledList,
  StyledButton,
  PageTitle,
} from "../utils/utilComponents"
import { slugify } from "../utils/utils"

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
        <StyledButton style={{ float: `right`, marginTop: `3px` }}>
          view all posts
        </StyledButton>
      </GatsbyLink>
      <ol>
        {data.allContentfulBlogPost.group.map(tag => {
          return (
            <div key={tag.fieldValue}>
              <StyledList>
                <GatsbyLink to={`/tags/${slugify(tag.fieldValue)}`}>
                  <h2>{tag.fieldValue}</h2>
                </GatsbyLink>
              </StyledList>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Tags
