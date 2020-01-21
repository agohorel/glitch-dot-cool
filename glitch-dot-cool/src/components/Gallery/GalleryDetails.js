import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import measurements from "../../styles/measurements"

const GalleryDetails = ({ img }) => {
  return <GalleryDetailImage fluid={img.node.image.fluid} />
}

export default GalleryDetails

const GalleryDetailImage = styled(Image)`
  width: 100%;
  margin-bottom: ${measurements.footerHeight}rem;
`
