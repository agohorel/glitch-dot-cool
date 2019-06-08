import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import { StyledLink, ListLink } from "../utils/utilComponents"
// import colors from "../styles/colors"
// import measurements from "../styles/measurements"

const ProfileImage = styled.img`
  width: 5rem;
  border-radius: 50%;
  display: inline-block;
  margin: 0 0 1rem 0;
`

const Posts = styled.div`
  display: inline-block;
  float: left;
  clear: left;
  margin-top: 3rem;
  padding: 2rem;
  background-color: #fff;
`

export const query = graphql`
  query($author: String!) {
    allContentfulAuthor(filter: { authorName: { eq: $author } }) {
      edges {
        node {
          authorName
          contactEmail
          avatar {
            file {
              url
            }
          }
          links {
            soundcloud
            bandcamp
          }
        }
      }
    }
    allContentfulBlogPost(filter: { author: { eq: $author } }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

const Tag = props => {
  console.log(props)
  let links = props.data.allContentfulAuthor.edges[0].node.links

  return (
    <Layout>
        <Posts>
            <ProfileImage
              src={props.data.allContentfulAuthor.edges[0].node.avatar.file.url}
            />
            <h1>{props.pageContext.author}</h1>

            {Object.keys(links).map(key => {
              return (
                <StyledLink key={key}>
                  <a href={`${links[key]}`}>{key}</a>
                </StyledLink>
              )
            })}

            <p>{props.data.allContentfulAuthor.edges[0].node.contactEmail}</p>
        </Posts>

        <Posts>
          <h2>posts:</h2>
          <ol>
            {props.data.allContentfulBlogPost.edges.map(post => {
              return (
                <div key={post.node.title}>
                  <StyledLink>
                    <ListLink to={`/blog/${post.node.slug}`}>
                      <h3>{post.node.title}</h3>
                    </ListLink>
                  </StyledLink>
                  <p>{post.node.publishedDate}</p>
                </div>
              )
            })}
          </ol>
        </Posts>
    </Layout>
  )
}

export default Tag
