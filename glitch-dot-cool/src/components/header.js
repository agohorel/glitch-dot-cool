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
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  )
}

export { Header, StyledLink }
