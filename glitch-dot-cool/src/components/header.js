import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { StyledList, GatsbyLink } from "../utils/utilComponents"

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
      <StyledList>
        <Link to="/">
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
      </StyledList>
      <nav style={{ float: `right` }}>
        <ul>
          <StyledList>
            <GatsbyLink to="/">home</GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/about/">about</GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/posts/">posts</GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/contact/">contact</GatsbyLink>
          </StyledList>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
