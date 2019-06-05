import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { StyledLink, ListLink } from "../utils/utilComponents"

const Header = () => {
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
    <header style={{ marginBottom: `1.5rem` }}>
      <StyledLink>
        <Link to="/">
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
      </StyledLink>
      <nav style={{ float: `right` }}>
        <ul>
          <StyledLink>
            <ListLink to="/">home</ListLink>
          </StyledLink>
          <StyledLink>
            <ListLink to="/about/">about</ListLink>
          </StyledLink>
          <StyledLink>
            <ListLink to="/posts/">posts</ListLink>
          </StyledLink>
          <StyledLink>
            <ListLink to="/contact/">contact</ListLink>
          </StyledLink>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
