import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Home from "../components/Home/Home"
import { mergePostsAndSortByDate } from "../utils/utils"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        filter: { frontPageAnnouncement: { eq: true } }
      ) {
        edges {
          node {
            thumbnail {
              fluid(quality: 50, maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            title
            author
            slug
            publishedDate
            id
          }
        }
      }
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            artwork {
              file {
                url
                fileName
              }
              fluid(quality: 50, maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            slug
            title
            publishedDate
            id
          }
        }
      }
    }
  `)

  const posts = mergePostsAndSortByDate(
    data.allContentfulBlogPost,
    data.allContentfulProject
  )

  return <Home posts={posts} />
}
