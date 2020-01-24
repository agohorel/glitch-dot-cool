import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import Profile from "../components/Profile/profile"
import ProfileNav from "../components/Profile/ProfileNav"
import PostCard from "../components/PostCard"
import { ProfileWrapper } from "../utils/utilComponents"

const Author = ({
  data: { contentfulAuthor, allContentfulBlogPost, allContentfulGalleryItem },
}) => {
  return (
    <Layout>
      <Head title={contentfulAuthor.authorName} />
      <ProfileWrapper>
        <Profile profileData={contentfulAuthor} />

        <ProfileNav
          profileData={contentfulAuthor}
          galleryItems={allContentfulGalleryItem}
        >
          {allContentfulBlogPost.edges.map(post => {
            return <PostCard post={post} key={post.node.slug} />
          })}
        </ProfileNav>
      </ProfileWrapper>
    </Layout>
  )
}

export default Author

export const query = graphql`
  query($author: String!) {
    contentfulAuthor(authorName: { eq: $author }) {
      authorName
      contactEmail
      location
      avatar {
        file {
          url
        }
        fluid(maxWidth: 100) {
          base64
          sizes
          src
          srcSet
          aspectRatio
        }
      }
      links {
        internal {
          content
        }
      }
    }
    allContentfulBlogPost(
      filter: { author: { eq: $author } }
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          author
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
    allContentfulGalleryItem(filter: { author: { eq: $author } }) {
      edges {
        node {
          description
          id
          title
          author
          image {
            fluid(quality: 75, maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const Posts = styled.div`
  display: inline-block;
  padding: 4rem;
  background-color: #fff;
  flex-grow: 1;

  @media only screen and (max-width: 960px) {
    margin-bottom: 3rem;
  }
`

const Post = styled.div`
  margin-top: 0.5rem;
`
