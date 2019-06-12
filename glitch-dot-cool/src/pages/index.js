import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { GatsbyLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const PostContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(30vmin, max-content));
`

const TextContainer = styled.div`
  padding: 1rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 2rem));
  background-color: rgba(255, 255, 255, 0.5);
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
      : `linear-gradient(217deg, rgba(200,200,200,.8), rgba(200,200,200,0) 70.71%),
         linear-gradient(127deg, rgba(127,127,127,.8), rgba(127,127,127,0) 70.71%),
         linear-gradient(336deg, rgba(0,0,0,.8), rgba(0,0,0,0) 70.71%);`};
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
              <TextContainer>
                <GatsbyLink to={`/blog/${post.node.slug}`}>
                  <h1>{post.node.title}</h1>
                </GatsbyLink>
                <GatsbyLink to={`/${slugify(post.node.author)}/posts`}>
                  <h3>
                    by <strong>{post.node.author}</strong>
                  </h3>
                </GatsbyLink>
              </TextContainer>
            </Post>
          )
        })}
      </PostContainer>
    </Layout>
  )
}
