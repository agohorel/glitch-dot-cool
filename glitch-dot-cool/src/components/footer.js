import React from "react"
import styled from "styled-components"

import { StyledLink, ListLink, Centered } from "../utils/utils"

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
          <StyledLink dark>
            <ListLink to="/">home</ListLink>
          </StyledLink>
          <StyledLink dark>
            <ListLink to="/about/">about</ListLink>
          </StyledLink>
          <StyledLink dark>
            <ListLink to="/posts/">posts</ListLink>
          </StyledLink>
          <StyledLink dark>
            <ListLink to="/contact/">contact</ListLink>
          </StyledLink>
        </ul>
      </Centered>

      <Centered>
        <StyledLink dark>
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
        </StyledLink>
      </Centered>
    </StyledFooter>
  )
}

export default Footer
