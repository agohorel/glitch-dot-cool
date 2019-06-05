import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { ListLink, StyledLink } from "../utils/utils"

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
        <h1>tags</h1>
        <ol>
          {data.allContentfulBlogPost.group.map(tag => {
            return (
              <div key={tag.fieldValue}>
                <StyledLink>
                  <ListLink to={`/tags/${tag.fieldValue}`}>
                    <h2>{tag.fieldValue}</h2>
                  </ListLink>
                </StyledLink>
              </div>
            )
          })}
        </ol>
      </Layout>
    )
}

export default Tags;