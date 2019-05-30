import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { StyledLink } from "../utils/utils"

import colors from "../styles/colors"
import measurements from "../styles/measurements"

const StyledFooter = styled.footer`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${measurements.footerHeight}rem;
  background-color: ${colors.darkgrey};
`
const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink>
        <Link to="/">some link</Link>
        <Link to="/">some link</Link>
        <Link to="/">some link</Link>
        <Link to="/">some link</Link>
        <Link to="/">some link</Link>
        <Link to="/">some link</Link>
      </StyledLink>
    </StyledFooter>
  )
}

export default Footer
