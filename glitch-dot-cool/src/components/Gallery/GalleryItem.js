import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { slugify } from "../../utils/utils"

const GalleryItem = ({ img }) => {
  return (
    <Link to={`/${slugify(img.author)}/gallery/${slugify(img.title)}`}>
      <GalleryThumbnail
        sizes={{ ...img.image.fluid, aspectRatio: 1 / 1 }}
        alt={img.title}
      />
    </Link>
  )
}

export default GalleryItem

const GalleryThumbnail = styled(Image)`
  width: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);

  :hover {
    opacity: 0.8;
  }
`
