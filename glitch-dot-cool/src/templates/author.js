import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import {
  StyledList,
  ListLink,
  StyledLink,
  Centered,
} from "../utils/utilComponents"

const ProfileImage = styled.img`
  width: 5rem;
  border-radius: 50%;
  display: inline-block;
  margin: 0 0 1rem 0;
`

const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
`

const Profile = styled.div`
  display: inline-block;
  padding: 2rem;
  margin-right: 3rem;
  background-color: #fff;
  align-self: flex-start;
`

const Posts = styled.div`
  display: inline-block;
  padding: 2rem;
  background-color: #fff;
  flex-grow: 1;
`

const Post = styled.div`
  margin-top: .25rem;
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
  let links = props.data.allContentfulAuthor.edges[0].node.links

  return (
    <Layout>
      <Wrapper>
        <Profile>
          <Centered column>
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
          </Centered>
        </Profile>

        <Posts>
          <h1>posts:</h1>
          <ol>
            {props.data.allContentfulBlogPost.edges.map(post => {
              return (
                <Post key={post.node.title}>
                  <StyledList>
                    <ListLink to={`/blog/${post.node.slug}`}>
                      <h3>{post.node.title}</h3>
                    </ListLink>
                  </StyledList>
                  <p>{post.node.publishedDate}</p>
                </Post>
              )
            })}
          </ol>
        </Posts>
      </Wrapper>
    </Layout>
  )
}

export default Tag
