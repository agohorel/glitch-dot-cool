import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { StyledList, GatsbyLink } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"

const StyledHeader = styled.header`
  margin: 3rem 0 1.5rem 0;
`

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
    <StyledHeader style={{ marginBottom: `1.5rem` }}>
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
    </StyledHeader>
  )
}

export { Header }
