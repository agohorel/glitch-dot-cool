import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { GatsbyLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Post = styled.div`
  background-color: #fff;
  padding: 2rem;
  display: inline-block;
  min-width: 20vw;
  min-height: 20vw;
  margin: 1rem;
  // background-image: url(${props => props.backgroundImg});
  background-image: ${props =>
    props.backgroundImg
      ? `linear-gradient(to bottom right, rgba(255, 255, 255, .5), rgba(0, 0, 0, .5)), 
      url(${props.backgroundImg})`
      : `linear-gradient(to bottom right, #fff, #000)`};
  background-size: cover;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate }
        filter: { frontPageAnnouncement: { eq: true } }
      ) {
        edges {
          node {
            frontPageAnnouncement
            title
            author
            slug
            body {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.allContentfulBlogPost.edges.map(post => {
        let img
        post.node.body.json.content.forEach(contentItem => {
          if (contentItem.nodeType === "embedded-asset-block") {
            img = contentItem.data.target.fields
          }
        })

        return (
          <Post
            key={post.node.slug}
            backgroundImg={img ? img.file["en-US"].url : null}
          >
            <GatsbyLink to={`/blog/${post.node.slug}`}>
              <h1>{post.node.title}</h1>
            </GatsbyLink>
            <GatsbyLink to={`/${slugify(post.node.author)}/posts`}>
              <h3>
                by <strong>{post.node.author}</strong>
              </h3>
            </GatsbyLink>
          </Post>
        )
      })}
    </Layout>
  )
}
