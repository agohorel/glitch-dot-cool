import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import DrawerToggle from "./sideDrawerToggle"
import { StyledList, GatsbyLink } from "../../utils/utilComponents"
import { flicker, shifter } from "../../styles/animations"
import { activeNavStyles } from "../../utils/utils"
import measurements from "../../styles/measurements"

const Header = ({ toggleNav }) => {
  return (
    <StyledHeader>
      <StyledList>
        <TextLogoWrapper>
          <Link to="/">
            <TextLogo>glitch[dot]cool</TextLogo>
            <TextLogoShifted>glitch[dot]cool</TextLogoShifted>
          </Link>
        </TextLogoWrapper>
      </StyledList>
      <StyledNav>
        <GatsbyLink to="/" activeStyle={activeNavStyles}>
          home
        </GatsbyLink>

        <GatsbyLink to="/about/" activeStyle={activeNavStyles}>
          about
        </GatsbyLink>

        <GatsbyLink to="/projects/" activeStyle={activeNavStyles}>
          projects
        </GatsbyLink>

        <GatsbyLink to="/members/" activeStyle={activeNavStyles}>
          members
        </GatsbyLink>

        <GatsbyLink to="/contact/" activeStyle={activeNavStyles}>
          contact
        </GatsbyLink>
      </StyledNav>
      <DrawerToggle click={toggleNav} />
    </StyledHeader>
  )
}

export { Header }

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 6rem 0 3rem 0;
  transition: 0.2s ease-out padding;

  @media only screen and (max-width: ${measurements.breakpointMobileNav}px) {
    padding: 3rem 0 3rem 0;
  }
`

const StyledNav = styled.nav`
  @media only screen and (max-width: ${measurements.breakpointMobileNav}px) {
    display: none;
  }

  a:not(:last-child) {
    margin-right: 2rem;
  }
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
