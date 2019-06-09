import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { ListLink, StyledList } from "../utils/utilComponents"
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
      <h1>tags</h1>
      <ol>
        {data.allContentfulBlogPost.group.map(tag => {
          return (
            <div key={tag.fieldValue}>
              <StyledList>
                <ListLink to={`/tags/${slugify(tag.fieldValue)}`}>
                  <h2>{tag.fieldValue}</h2>
                </ListLink>
              </StyledList>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Tags
