import React from "react"
import { Link } from "gatsby"
import styled, { keyframes, css } from "styled-components"

import colors from "../styles/colors"

const chromaticAbberationAnimation = keyframes`
    0% {
      text-shadow: 1px 0px 1px ${colors.valid}, -1px 0px 1px ${colors.invalid};
    }

    100% {
      text-shadow: -1px 0px 2px ${colors.valid}, 1px 0px 2px ${colors.invalid};
    }
`

const chromaticAbberation = css`
  animation: ${chromaticAbberationAnimation} 3s linear alternate infinite;
`

const flicker = keyframes`
    0% { opacity: 1; }
    3% { opacity: 0; }
    8% { opacity: .1; }
    14% { opacity: .4; }
    21% { opacity: 0; }
    26% { opacity: .9; }
    29% { opacity: .2; }
    35% { opacity: 1; }
    39% { opacity: 0; }
    43% { opacity: .4; }
    46% { opacity: .9; }
    50% { opacity: 1; }
    52% { opacity: .3; }
    58% { opacity: 1; }
    61% { opacity: 0; }
    63% { opacity: .3; }
    66% { opacity: .6; }
    70% { opacity: .9; }
    72% { opacity: 1; }
    76% { opacity: .2; }
    79% { opacity: 0; }
    82% { opacity: .1; }
    86% { opacity: .5; }
    89% { opacity: .3; }
    91% { opacity: 1; }
    97% { opacity: 0; }
    100% { opacity: .5; }
`

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
    font-size: ${props => (props.drawer ? `4rem` : `inherit`)}
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

const BlogImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

const BlogImageContainer = styled.div`
  width: 75%;
`

const BlogImageSubtitle = styled.i`
  color: ${colors.midgrey};
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 2rem;
`

export {
  GatsbyLink,
  StyledList,
  StyledLink,
  Centered,
  StyledButton,
  PageTitle,
  StyledLinkButton,
  BlogImageWrapper,
  BlogImageContainer,
  BlogImageSubtitle,
  flicker
}
