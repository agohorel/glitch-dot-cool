import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const PostContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  @media only screen and (max-width: 767px) {
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
`

const TextContainer = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`

const Post = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  padding: 2rem;

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
      <Head title="home"></Head>
      <PostContainer>
        {data.allContentfulBlogPost.edges.map(post => {
          let img
          post.node.body.json.content.some(contentItem => {
             if (contentItem.nodeType === "embedded-asset-block") {
               img = contentItem.data.target.fields
             }
             return img
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
