import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { slugify } from "../../utils/utils"

const GalleryItem = ({ img }) => {
  return (
    <Link to={`/${slugify(img.author)}/gallery/${slugify(img.title)}`}>
      <GalleryThumbnail fluid={img.image.fluid} alt={img.description} />
    </Link>
  )
}

export default GalleryItem

const GalleryThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  :hover {
    opacity: 0.8;
  }
`
