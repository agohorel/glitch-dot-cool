import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { slugify } from "../../utils/utils"

const GalleryItem = ({ img }) => {
  return (
    <Link to={`/${slugify(img.author)}/gallery/${slugify(img.title)}`}>
      <ThumbnailContainer>
        <GalleryThumbnail
          sizes={{ ...img.image.fluid, aspectRatio: 1 / 1 }}
          alt={img.title}
        />
      </ThumbnailContainer>
    </Link>
  )
}

export default GalleryItem

const GalleryThumbnail = styled(Image)`
  width: 100%;
  transition: 0.2s ease-out all;

  :hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`

const ThumbnailContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-out all;

  :hover {
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
  }
`
