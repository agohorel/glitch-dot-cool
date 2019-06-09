import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"


import Layout from "../components/layout"
import Profile from "../components/profile"
import {
  StyledList,
  ListLink,
  StyledLink,
  Centered,
} from "../utils/utilComponents"


const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
`

const Posts = styled.div`
  display: inline-block;
  padding: 2rem;
  background-color: #fff;
  flex-grow: 1;
`

const Post = styled.div`
  margin-top: 0.25rem;
`

export const query = graphql`
  query($author: String!) {
    allContentfulAuthor(filter: { authorName: { eq: $author } }) {
      edges {
        node {
          authorName
          contactEmail
          location
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
  return (
    <Layout>
      <Wrapper>
        <Profile props={props}></Profile>
        {/* <Profile>
          <Centered column>
            <ProfileImage
              src={props.data.allContentfulAuthor.edges[0].node.avatar.file.url}
            />
            <h1>{props.pageContext.author}</h1>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {` ${props.data.allContentfulAuthor.edges[0].node.location}`}
            </p>
            {Object.keys(links).map(key => {
              return (
                <StyledLink key={key}>
                  <p>
                    <a href={`${links[key]}`}>{key} </a>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </p>
                </StyledLink>
              )
            })}

            <p>{props.data.allContentfulAuthor.edges[0].node.contactEmail}</p>
          </Centered>
        </Profile> */}

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
