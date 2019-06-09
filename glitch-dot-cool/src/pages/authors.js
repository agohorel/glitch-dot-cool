import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { ListLink, StyledList } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: author }) {
        group(field: author) {
          fieldValue
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>authors</h1>
      <ol>
        {data.allContentfulBlogPost.group.map(post => {
          return (
            <div key={post.fieldValue}>
              <StyledList>
                <ListLink to={`/${slugify(post.fieldValue)}/posts`}>
                  <h2>{post.fieldValue}</h2>
                </ListLink>
              </StyledList>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Posts
