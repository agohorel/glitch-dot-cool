import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import DrawerToggle from "./sideDrawerToggle"
import { StyledList, GatsbyLink } from "../utils/utilComponents"
import { flicker, shifter } from "../styles/animations"
import { activeNavStyles } from "../utils/utils"

const StyledHeader = styled.header`
  display: flex;
  height: 30px;
  padding: 6rem 0 3rem 0;
  transition: 0.2s ease-out padding;

  @media only screen and (max-width: 767px) {
    padding: 3rem 0 3rem 0;
  }
`

const StyledNav = styled.nav`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const TextLogoWrapper = styled.div`
  position: absolute;

  :hover {
    h3:first-of-type {
      clip-path: inset(50% 0% 0% 0%);
      font-weight: 100 !important;
      animation: ${flicker} 1s linear forwards infinite;
    }

    h3:not(:first-of-type) {
      opacity: 1;
      clip-path: inset(0% 0% 50% 0%);
      font-weight: 100 !important;
      animation: ${flicker} 2s backwards infinite,
        ${shifter} 2s steps(13) infinite;
    }
  }
`

const TextLogo = styled.h3`
  font-weight: 500;
`

const TextLogoShifted = styled.h3`
  font-weight: 500;
  position: absolute;
  top: 0;
  left: 5.5px;
  opacity: 0;
  pointer-events: none;
`

const Header = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <StyledHeader>
      <StyledList>
        <TextLogoWrapper>
          <Link to="/">
            <TextLogo>{data.site.siteMetadata.title}</TextLogo>
            <TextLogoShifted>{data.site.siteMetadata.title}</TextLogoShifted>
          </Link>
        </TextLogoWrapper>
      </StyledList>
      <Spacer />
      <StyledNav>
        <ul>
          <StyledList>
            <GatsbyLink to="/" activeStyle={activeNavStyles}>
              home
            </GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/about/" activeStyle={activeNavStyles}>
              about
            </GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/projects/" activeStyle={activeNavStyles}>
              projects
            </GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/feeds/" activeStyle={activeNavStyles}>
              feeds
            </GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/contact/" activeStyle={activeNavStyles}>
              contact
            </GatsbyLink>
          </StyledList>
        </ul>
      </StyledNav>
      <DrawerToggle click={props.drawerToggleClickHandler} />
    </StyledHeader>
  )
}

export { Header }
