import React from "react"
import styled from "styled-components"

import { FooterLinks } from "./LinkIcons"
import { StyledList, GatsbyLink } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"

import colors from "../styles/colors"
import measurements from "../styles/measurements"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${measurements.footerHeight}rem;
  background-color: ${colors.nearblack};

  li a {
    font-size: calc(12px + 1vw);
  }

  @media only screen and (min-width: 1200px) {
    li a {
      font-size: 2.4rem;
    }
  }

  @media only screen and (max-width: ${measurements.breakpointMobileNav}px) {
    padding: 1rem;
    height: auto;

    ul {
      padding: 0;
    }
  }

  @media only screen and (max-width: 395px) {
    // hide "contact"
    li:last-of-type {
      display: none;
    }

    // remove margin from item preceeding now-hidden "contact"
    li:nth-of-type(4) {
      margin: 0;
    }
  }
`

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0.75rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      <nav>
        <FooterNavList>
          <StyledList dark footer>
            <GatsbyLink to="/" activeStyle={activeNavStyles}>
              home
            </GatsbyLink>
          </StyledList>
          <StyledList dark footer>
            <GatsbyLink to="/about/" activeStyle={activeNavStyles}>
              about
            </GatsbyLink>
          </StyledList>
          <StyledList dark footer>
            <GatsbyLink to="/projects/" activeStyle={activeNavStyles}>
              projects
            </GatsbyLink>
          </StyledList>
          <StyledList dark footer>
            <GatsbyLink to="/feeds/" activeStyle={activeNavStyles}>
              feeds
            </GatsbyLink>
          </StyledList>
          <StyledList dark footer>
            <GatsbyLink to="/contact/" activeStyle={activeNavStyles}>
              contact
            </GatsbyLink>
          </StyledList>
        </FooterNavList>
      </nav>
      <FooterLinks />
    </StyledFooter>
  )
}

export default Footer
