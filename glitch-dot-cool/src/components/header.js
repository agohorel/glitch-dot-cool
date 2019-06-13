import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { StyledList, GatsbyLink } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"

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
            <GatsbyLink to="/" activeStyle={activeNavStyles}>
              home
            </GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/about/" activeStyle={activeNavStyles}>
              about
            </GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/feeds/" activeStyle={activeNavStyles}>
              feeds
            </GatsbyLink>
          </StyledList>
          <StyledList>
            <GatsbyLink to="/contact/" activeStyle={activeNavStyles}>
              contact
            </GatsbyLink>
          </StyledList>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
