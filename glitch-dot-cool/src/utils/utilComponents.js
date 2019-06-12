import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import colors from "../styles/colors"

const GatsbyLink = styled(props => <Link to={props.to} {...props} />)`
  text-decoration: none;
  color: ${props =>
    props.dark ? `${colors.offwhite}` : `${colors.nearblack}`};
  transition: 0.2s ease all;

  :hover {
    color: ${props =>
      props.dark ? `${colors.darkgrey}` : `${colors.lightgrey}`};
  }
`

const StyledList = styled.li`
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

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props =>
    props.dark ? `${colors.offwhite}` : `${colors.nearblack}`};
  transition: 0.2s ease all;

  :hover {
    color: ${props =>
      props.dark ? `${colors.darkgrey}` : `${colors.lightgrey}`};
  }
`

const Centered = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? `column` : `row`)};
  justify-content: center;
  align-items: center;
`

const StyledButton = styled.button`
  display: inline-block;
  padding: .5rem 1rem;
  background-color: ${colors.midgrey};
  color: ${colors.offwhite};
  border: none;
  transition: .2s ease all;

  :hover {
    cursor: pointer;
    background-color: ${colors.darkgrey};
  }
`

const PageTitle = styled.h1`
  display: inline;
`

export { GatsbyLink, StyledList, StyledLink, Centered, StyledButton, PageTitle }
