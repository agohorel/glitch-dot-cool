import React from "react"
import styled from "styled-components"

import { FooterLinks } from "./LinkIcons"
import { StyledList, GatsbyLink } from "../../utils/utilComponents"
import { activeNavStyles } from "../../utils/utils"

import measurements from "../../styles/measurements"
import { chromaticAbberation } from "../../styles/animations"

const Footer = () => {
  return (
    <StyledFooter>
      <Nav>
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
      </Nav>
      <FooterLinks />
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${measurements.footerHeight}rem;
  background-color: ${props => props.theme.colors.footer};

  a {
    font-size: calc(12px + 1vw);
  }

  @media only screen and (min-width: 1200px) {
    a {
      font-size: 2.4rem;
    }
  }

  @media only screen and (max-width: ${measurements.breakpointMobileNav}px) {
    padding: 1rem;
    height: auto;
  }
`

const Nav = styled.nav`
  padding: 0.75rem;

  a:not(:last-child) {
    margin-right: 3rem;
  }

  a,
  a:visited {
    transition: 0.2s ease all;
    color: ${props => props.theme.colors.footer_text};
  }

  @media only screen and (max-width: 395px) {
    // hide "contact"
    a:last-of-type {
      display: none;
    }

    // remove margin from item preceeding now-hidden "contact"
    a:nth-child(4) {
      margin: 0;
    }
  }

  @media (max-width: 300px) {
    a:not(:nth-child(4)) {
      margin-right: 2rem;
    }
  }
`
