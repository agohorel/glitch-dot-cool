import React from "react"
import styled from "styled-components"

import { GatsbyLink, Card } from "../utils/utilComponents"

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`
