import React from "react"
import styled from "styled-components"

import { GatsbyLink } from "../utils/utilComponents"

const Post = ({ post }) => {
  const { slug, title } = post.node

  return (
    <Card>
      <TextContainer>
        <GatsbyLink to={`/projects/${slug}`}>
          <h1>{title}</h1>
        </GatsbyLink>
      </TextContainer>
    </Card>
  )
}

export default Post

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  padding: 4rem;
  height: 100%;

  background-image: linear-gradient(
      217deg,
      rgba(200, 200, 200, 0.8),
      rgba(200, 200, 200, 0) 70.71%
    ),
    linear-gradient(
      127deg,
      rgba(127, 127, 127, 0.8),
      rgba(127, 127, 127, 0) 70.71%
    ),
    linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70.71%);
  background-size: cover;
  background-position: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`
