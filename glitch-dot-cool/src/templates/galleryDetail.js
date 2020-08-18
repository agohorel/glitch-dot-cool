import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import Profile from "../components/Profile/profile"
import GalleryDetailImage from "../components/Gallery/GalleryDetailImage"
import GalleryDetails from "../components/Gallery/GalleryDetails"
import { ProfileWrapper } from "../utils/utilComponents"

const GalleryDetail = ({
  data: { contentfulAuthor, allContentfulGalleryItem },
}) => {
  return (
    <Layout>
      <Head title={`${contentfulAuthor.authorName}'s gallery`} />
      <ProfileWrapper>
        <LeftColumn>
          <Profile profileData={contentfulAuthor} />
          <GalleryDetails img={allContentfulGalleryItem.edges[0]} />
        </LeftColumn>
        <GalleryDetailImage img={allContentfulGalleryItem.edges[0]} />
      </ProfileWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($author: String!, $id: String!) {
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

    allContentfulGalleryItem(filter: { contentful_id: { eq: $id } }) {
      edges {
        node {
          description
          id
          title
          author
          image {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default GalleryDetail

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`
