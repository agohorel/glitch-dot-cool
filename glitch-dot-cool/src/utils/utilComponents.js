import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { chromaticAbberation } from "../styles/animations"
import measurements from "../styles/measurements"

const GatsbyLink = styled(props => <Link to={props.to} {...props} />)`
  text-decoration: none;
  color: ${props =>
    props.dark ? props.theme.colors.scale_5 : props.theme.colors.scale_1};
  transition: 0.2s ease all;

  :hover {
    color: ${props =>
      props.dark ? props.theme.colors.scale_3 : props.theme.colors.scale_2};
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
      props.dark ? props.theme.colors.scale_5 : props.theme.colors.scale_1};
    font-size: ${props => (props.drawer ? `4rem` : `inherit`)}
    transition: 0.2s ease all;

    :hover {
      color: ${props =>
        props.dark ? props.theme.colors.scale_3 : props.theme.colors.scale_2};
      ${chromaticAbberation}
    }
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props =>
    props.dark ? props.theme.colors.scale_5 : props.theme.colors.scale_1};
  transition: 0.2s ease all;

  :hover {
    color: ${props =>
      props.dark ? props.theme.colors.scale_3 : props.theme.colors.scale_2};
    ${chromaticAbberation}
  }
`

const Centered = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? `column` : `row`)};
  justify-content: ${props => (props.start ? `flex-start` : `center`)};
  align-items: ${props => (props.start ? `flex-start` : `center`)};
`

const StyledButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  min-width: 10rem;
  background-color: ${props => props.theme.colors.scale_3};
  color: ${props => props.theme.colors.scale_5};
  border: none;
  transition: 0.2s ease all;

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.scale_2};
  }
`

const StyledLinkButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  min-width: 10rem;
  border: 1px solid ${props => props.theme.colors.scale_3};
  border-radius: 3px;
  background-color: ${props => props.theme.colors.scale_6};
  color: ${props => props.theme.colors.scale_1};
  transition: 0.1s ease all;
  text-decoration: none;
  font-size: 1.6rem;
  text-align: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);

  :hover {
    cursor: pointer;
    transform: translateY(-2px);
    background-color: ${props => props.theme.colors.scale_1};
    color: ${props => props.theme.colors.scale_5};
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.4);
    text-shadow: 0px 0px 1px black;
  }

  :active {
    transform: translateY(1px);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
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
  width: 100%;
`

const BlogImageSubtitle = styled.i`
  color: ${props => props.theme.colors.scale_3};
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 2rem;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  padding: 4rem;
  height: 100%;
  background-image: linear-gradient(
      217deg,
      rgba(200, 200, 200, 0.8),
      rgba(200, 200, 200, 0) 70.71%
    ),
    linear-gradient(
      127deg,
      rgba(127, 127, 127, 0.8),
      rgba(127, 127, 127, 0) 70.71%
    ),
    linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70.71%);
  background-size: cover;
  background-position: center;
`

const ProfileWrapper = styled.div`
  margin: 6rem 0 ${measurements.footerHeight}rem 0;
  display: flex;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 2rem;
  }
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
  Card,
  ProfileWrapper,
}
