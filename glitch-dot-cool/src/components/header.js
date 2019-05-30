import React from "react"
import { Link } from "gatsby"

import { StyledLink, ListLink } from "../utils/utils"

const Header = () => {
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <StyledLink>
        <Link to="/">
          <h3>glitch[dot]cool</h3>
        </Link>
      </StyledLink>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <StyledLink>
          <ListLink to="/">home</ListLink>
          <ListLink to="/about/">about</ListLink>
          <ListLink to="/contact/">contact</ListLink>
        </StyledLink>
      </ul>
    </header>
  )
}

export { Header, StyledLink }
