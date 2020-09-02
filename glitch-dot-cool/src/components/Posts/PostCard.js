import React from "react"
import styled from "styled-components"

import { GatsbyLink } from "../../utils/utilComponents"
import { slugify, parseAuthorLinks } from "../../utils/utils"

const PostCard = ({ post }) => {
  const authors = parseAuthorLinks(post.node.author)

  return (
    <GatsbyLink to={`/${slugify(authors[0].name)}/${post.node.slug}`}>
      <Post>
        <h3>{post.node.title}</h3>

        <p>{post.node.publishedDate}</p>
      </Post>
    </GatsbyLink>
  )
}

export default PostCard

const Post = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.colors.scale_5};
  margin: 2rem 0rem;

  :hover {
    background-color: ${props => props.theme.colors.scale_4};
  }
`
