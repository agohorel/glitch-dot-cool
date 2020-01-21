import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Profile from "../components/profile"
import GalleryContainer from "../components/Gallery/GalleryContainer"
import { ProfileWrapper } from "../utils/utilComponents"

const Gallery = ({ data: { contentfulAuthor, allContentfulGalleryItem } }) => {
  return (
    <Layout>
      <Head title={`${contentfulAuthor.authorName}'s gallery`} />
      <ProfileWrapper>
        <Profile profileData={contentfulAuthor} />
        <GalleryContainer galleryItems={allContentfulGalleryItem} />
      </ProfileWrapper>
    </Layout>
  )
}

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

export default Gallery
