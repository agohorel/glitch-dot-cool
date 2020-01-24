import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import measurements from "../../styles/measurements"

const GalleryDetailImage = ({ img }) => {
  return <Img fluid={img.node.image.fluid} />
}

export default GalleryDetailImage

const Img = styled(Image)`
  width: 100%;
  margin-bottom: ${measurements.footerHeight}rem;
`
