import React from "react"
import styled from "styled-components"

import { GatsbyLink, Card } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Post = ({ post }) => {
  const { author, slug, title } = post.node

  return (
    <Card>
      <TextContainer>
        <GatsbyLink to={`/${slugify(author)}/${slug}`}>
          <h1>{title}</h1>
        </GatsbyLink>
        <GatsbyLink to={`/${slugify(author)}/posts`}>
          <h3>
            by <strong>{author}</strong>
          </h3>
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
