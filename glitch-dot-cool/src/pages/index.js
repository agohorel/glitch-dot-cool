import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const PostsContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));

  :last-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2.2rem;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`

const Post = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  padding: 4rem;
  height: 100%;

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
            publishedDate
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
              fluid {
                base64
                sizes
                src
                srcSet
                aspectRatio
              }
            }
            slug
            title
            publishedDate
          }
        }
      }
      allContentfulAsset {
        edges {
          node {
            file {
              fileName
            }
            fluid {
              base64
              sizes
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
    }
  `)

  let allPosts = []

  data.allContentfulBlogPost.edges.forEach(post => {
    post.type = "blogPost"

    post.node.body.json.content.forEach(contentItem => {
      if (
        contentItem.nodeType === "embedded-asset-block" &&
        contentItem.data.target.fields.file["en-US"].contentType.includes(
          "image"
        )
      ) {
        data.allContentfulAsset.edges.forEach(asset => {
          if (
            contentItem.data.target.fields.file["en-US"].fileName ===
            asset.node.file.fileName
          ) {
            contentItem.img = asset.node.fluid
          }
        })
      }
    })
    allPosts.push(post)
  })

  data.allContentfulProject.edges.forEach(project => {
    project.type = "project"
    allPosts.push(project)
  })

  allPosts.sort((a, b) => {
    return new Date(b.node.publishedDate) - new Date(a.node.publishedDate)
  })

  return (
    <Layout>
      <Head title="home" />

      <PostsContainer>
        {allPosts.map(post => {
          let img
          if (post.type === "blogPost") {
            post.node.body.json.content.some(contentItem => {
              if (contentItem.nodeType === "embedded-asset-block") {
                img = contentItem.img
              }
              return img
            })
            // handle posts with no images - use default gradient
            if (!img) {
              return (
                <Post key={post.node.slug} backgroundImg={null}>
                  <TextContainer>
                    <GatsbyLink
                      to={`/${slugify(post.node.author)}/${post.node.slug}`}
                    >
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
            } 
            // otherwise if post has img, use gatsby-background-image
            else {
              return (
                <BackgroundImage
                  key={post.node.slug}
                  fluid={img ? img : undefined}
                >
                  <Post backgroundImg={null}>
                    <TextContainer>
                      <GatsbyLink
                        to={`/${slugify(post.node.author)}/${post.node.slug}`}
                      >
                        <h1>{post.node.title}</h1>
                      </GatsbyLink>
                      <GatsbyLink to={`/${slugify(post.node.author)}/posts`}>
                        <h3>
                          by <strong>{post.node.author}</strong>
                        </h3>
                      </GatsbyLink>
                    </TextContainer>
                  </Post>
                </BackgroundImage>
              )
            }
          } else if (post.type === "project") {
            img = post.node.artwork.fluid

            return (
              <BackgroundImage key={post.node.slug} fluid={img}>
                <Post backgroundImg={img ? img.url : null}>
                  <TextContainer>
                    <GatsbyLink to={`/projects/${post.node.slug}`}>
                      <h1>{post.node.title}</h1>
                    </GatsbyLink>
                  </TextContainer>
                </Post>
              </BackgroundImage>
            )
          }
          return null
        })}
      </PostsContainer>
    </Layout>
  )
}
