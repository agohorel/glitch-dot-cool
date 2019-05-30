import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import colors from "../styles/colors"

const ListLink = props => (
  <StyledLink>
    <Link to={props.to}>{props.children}</Link>
  </StyledLink>
)

const StyledLink = styled.p`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  a,
  a:visited {
    text-decoration: none;
    color: ${props =>
      props.dark ? `${colors.offwhite}` : `${colors.nearblack}`};
    transition: 0.2s ease all;

    :hover {
      color: ${props =>
        props.dark ? `${colors.darkgrey}` : `${colors.lightgrey}`};
    }
  }
`

const Centered = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? `column` : `row`)};
  justify-content: center;
  align-items: center;
`

export { ListLink, StyledLink, Centered }
