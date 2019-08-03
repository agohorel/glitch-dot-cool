import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { chromaticAbberation } from "../styles/animations"
import colors from "../styles/colors"

const GatsbyLink = styled(props => <Link to={props.to} {...props} />)`
  text-decoration: none;
  color: ${props =>
    props.dark ? `${colors.offwhite}` : `${colors.nearblack}`};
  transition: 0.2s ease all;

  :hover {
    color: ${props =>
      props.dark ? `${colors.midgrey}` : `${colors.darkgrey}`};
    ${chromaticAbberation}
  }
`

const StyledList = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: ${props => (props.drawer ? `0` : `3rem`)};
    margin-bottom: ${props => (props.drawer ? `3rem` : `0`)};
  }

  a,
  a:visited {
    text-decoration: none;
    color: ${props =>
      props.dark ? `${colors.offwhite}` : `${colors.nearblack}`};
    font-size: ${props => props.drawer ? `4rem` : `inherit`}
    transition: 0.2s ease all;

    :hover {
      color: ${props =>
        props.dark ? `${colors.midgrey}` : `${colors.darkgrey}`};
      ${chromaticAbberation}
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
      props.dark ? `${colors.midgrey}` : `${colors.darkgrey}`};
    ${chromaticAbberation}
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
  padding: 1rem 2rem;
  min-width: 10rem;
  background-color: ${colors.midgrey};
  color: ${colors.offwhite};
  border: none;
  transition: 0.2s ease all;

  :hover {
    cursor: pointer;
    background-color: ${colors.darkgrey};
  }
`

const StyledLinkButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  min-width: 10rem;
  background-color: ${colors.midgrey};
  color: ${colors.offwhite};
  border: none;
  transition: 0.2s ease all;
  text-decoration: none;
  font-size: 1.6rem;
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: ${colors.darkgrey};
  }
`

const PageTitle = styled.h1`
  padding-top: 4rem;
`

const BlogBody = styled.p`
  display: inline;
`

export {
  GatsbyLink,
  StyledList,
  StyledLink,
  Centered,
  StyledButton,
  PageTitle,
  StyledLinkButton,
  BlogBody
}
