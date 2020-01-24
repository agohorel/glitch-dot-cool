import React from "react"
import styled from "styled-components"

import GalleryItem from "./GalleryItem"

const GalleryContainer = ({ galleryItems }) => {
  return (
    <GalleryWrapper>
      {galleryItems.edges.map(item => (
        <GalleryItem key={item.node.id} img={item.node} />
      ))}
    </GalleryWrapper>
  )
}

export default GalleryContainer

const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 2rem;
`
