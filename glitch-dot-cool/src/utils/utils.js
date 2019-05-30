import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import colors from "../styles/colors"

const ListLink = props => (
  <StyledLink>
    <Link to={props.to}>{props.children}</Link>
  </StyledLink>
)

const StyledLink = styled.li`
  display: inline-block;
  margin-right: 1rem;

  a,
  a:visited {
    text-decoration: none;
    color: ${colors.black};
    transition: 0.2s ease all;

    :hover {
      color: ${colors.lightgrey};
    }
  }
`

export { ListLink, StyledLink }
