import React from "react"
import styled from "styled-components"

import { StyledList, GatsbyLink, Centered } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"

import colors from "../styles/colors"
import measurements from "../styles/measurements"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
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
`

const devtagStyles = {
  fontSize: `1.2rem`,
  color: colors.midgrey,
}

const Footer = () => {
  return (
    <StyledFooter>
      <Centered>
        <ul style={{ listStyle: `none`, padding: `.75rem` }}>
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
        </ul>
      </Centered>

      <p style={devtagStyles}>
        site developed by{" "}
        <a
          style={devtagStyles}
          href="https://agohorel.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          alex gohorel
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
