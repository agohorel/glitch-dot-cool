import React from "react"
import styled from "styled-components"

import { GatsbyLink } from "../../utils/utilComponents"
import { activeNavStyles } from "../../utils/utils"
import colors from "../../styles/colors"

const ProfileNav = props => {
  const { authorName } = props.profileData
  return (
    <Posts>
      <SubNav>
        <GatsbyLink to={`/${authorName}/posts`} activeStyle={activeNavStyles}>
          <h1>posts</h1>
        </GatsbyLink>
        <GatsbyLink to={`/${authorName}/gallery`} activeStyle={activeNavStyles}>
          <h1>gallery</h1>
        </GatsbyLink>
      </SubNav>
      {props.children}
    </Posts>
  )
}

export default ProfileNav

const Posts = styled.div`
  display: inline-block;
  padding: 4rem;
  background-color: #fff;
  flex-grow: 1;

  @media only screen and (max-width: 960px) {
    margin-bottom: 3rem;
  }
`

const SubNav = styled.nav`
  display: flex;

  h1 {
    margin: 0 2rem 2rem 0;
    padding: .25rem .5rem;
    background-color: ${colors.lightgrey};
  }
`