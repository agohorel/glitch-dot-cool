import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { GatsbyLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const PostContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(30vmin, max-content));
`

const Post = styled.div`
  display: inline-block;
  padding: 2rem;
  min-width: 15vw;
  min-height: 15vw;

  background-image: ${props =>
    props.backgroundImg
      ? `linear-gradient(to bottom right, rgba(255, 255, 255, .5), rgba(0, 0, 0, .5)), 
      url(${props.backgroundImg})`
      : `linear-gradient(to bottom right, #fff, #000)`};
  background-size: cover;
  background-position: center;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
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
      <PostContainer>
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
      </PostContainer>
    </Layout>
  )
}
