import React from "react"
import styled from "styled-components"

import { GatsbyLink, Card } from "../../utils/utilComponents"
import { slugify, parseAuthorLinks } from "../../utils/utils"

const Post = ({ post }) => {
  const { author, slug, title } = post.node
  const authorLinks = parseAuthorLinks(author)

  return (
    <Card>
      <TextContainer>
        <GatsbyLink to={`${slugify(authorLinks[0].name)}/${slug}`}>
          <h1>{title}</h1>
        </GatsbyLink>

        <Authors>
          <p>{`by `}</p>
          {authorLinks.map((author, idx) => {
            if (idx < authorLinks.length - 1) {
              return (
                <GatsbyLink to={author.slug}>
                  <h3>
                    <strong>{author.name},</strong>
                  </h3>
                </GatsbyLink>
              )
            } else {
              return (
                <GatsbyLink to={author.slug}>
                  <h3>
                    <strong>{author.name}</strong>
                  </h3>
                </GatsbyLink>
              )
            }
          })}
        </Authors>
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
  background-color: ${props => props.theme.colors.card_overlay};
`

const Authors = styled.div`
  p,
  h3 {
    display: inline;
  }
`
