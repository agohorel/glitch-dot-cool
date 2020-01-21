import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const GalleryItem = ({ img }) => {
  return (
    <GalleryThumbnail
      fluid={img.image.fluid}
      alt={img.description}
    />
  )
}

export default GalleryItem

const GalleryThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
