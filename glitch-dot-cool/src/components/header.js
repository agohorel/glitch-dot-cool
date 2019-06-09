import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { StyledList, ListLink } from "../utils/utilComponents"

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
            <ListLink to="/">home</ListLink>
          </StyledList>
          <StyledList>
            <ListLink to="/about/">about</ListLink>
          </StyledList>
          <StyledList>
            <ListLink to="/posts/">posts</ListLink>
          </StyledList>
          <StyledList>
            <ListLink to="/contact/">contact</ListLink>
          </StyledList>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
