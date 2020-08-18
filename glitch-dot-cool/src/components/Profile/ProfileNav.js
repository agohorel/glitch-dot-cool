import React from "react"
import styled from "styled-components"

import { GatsbyLink } from "../../utils/utilComponents"
import { activeNavStyles } from "../../utils/utils"

const ProfileNav = props => {
  const { authorName } = props.profileData
  const { galleryItems } = props
  return (
    <Posts>
      <SubNav>
        <GatsbyLink to={`/${authorName}/posts`} activeStyle={activeNavStyles}>
          <h1>posts</h1>
        </GatsbyLink>
        {galleryItems.edges.length ? (
          <GatsbyLink
            to={`/${authorName}/gallery`}
            activeStyle={activeNavStyles}
          >
            <h1>gallery</h1>
          </GatsbyLink>
        ) : null}
      </SubNav>
      {props.children}
    </Posts>
  )
}

export default ProfileNav

const Posts = styled.div`
  display: inline-block;
  padding: 4rem;
  background-color: ${props => props.theme.colors.scale_6};
  flex-grow: 1;

  @media only screen and (max-width: 960px) {
    margin-bottom: 3rem;
  }
`

const SubNav = styled.nav`
  display: flex;

  h1 {
    margin: 0 2rem 2rem 0;
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme.colors.scale_4};
  }

  @media (max-width: 370px) {
    flex-direction: column;

    h1 {
      margin: 0 0 2rem 0;
    }
  }
`
