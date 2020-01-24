import React from "react"
import styled from "styled-components"

import { GatsbyLink } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

import colors from "../styles/colors"

const PostCard = ({ post }) => {
  return (
    <GatsbyLink to={`/${slugify(post.node.author)}/${post.node.slug}`}>
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
  background-color: ${colors.offwhite};
  margin: 2rem 0rem;

  :hover {
    background-color: ${colors.lightgrey};
  }
`
