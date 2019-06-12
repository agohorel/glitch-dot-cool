import React from "react"
import styled from "styled-components"

import { StyledList, GatsbyLink, Centered } from "../utils/utilComponents"

import colors from "../styles/colors"
import measurements from "../styles/measurements"

const StyledFooter = styled.footer`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${measurements.footerHeight}rem;
  background-color: ${colors.nearblack};
`

const Footer = () => {
  return (
    <StyledFooter>
      <Centered>
        <ul style={{ listStyle: `none`, padding: `.75rem` }}>
          <StyledList dark>
            <GatsbyLink to="/">home</GatsbyLink>
          </StyledList>
          <StyledList dark>
            <GatsbyLink to="/about/">about</GatsbyLink>
          </StyledList>
          <StyledList dark>
            <GatsbyLink to="/posts/">posts</GatsbyLink>
          </StyledList>
          <StyledList dark>
            <GatsbyLink to="/contact/">contact</GatsbyLink>
          </StyledList>
        </ul>
      </Centered>

      <Centered>
        <StyledList dark>
          <p style={{ fontSize: `.6rem`, color: colors.midgrey }}>
            developed by{" "}
            <a
              style={{ color: colors.midgrey }}
              href="https://agohorel.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              alex gohorel
            </a>
          </p>
        </StyledList>
      </Centered>
    </StyledFooter>
  )
}

export default Footer
