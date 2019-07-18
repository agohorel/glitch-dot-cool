import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import DrawerToggle from "./sideDrawerToggle"
import { StyledList, GatsbyLink } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"

const StyledHeader = styled.header`
  display: flex;
  height: 30px;
  margin: 6rem 0 3rem 0;
  transition: .2s ease-out margin;

  @media only screen and (max-width: 767px) {
    margin: 3rem 0 1.5rem 0;
  }
`

const StyledNav = styled.nav`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const Header = props => {
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
    <StyledHeader>
      <StyledList>
        <Link to="/">
          <h3 style={{fontWeight: `500`}}>{data.site.siteMetadata.title}</h3>
        </Link>
      </StyledList>
      <Spacer />
      <StyledNav>
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
            <GatsbyLink to="/projects/" activeStyle={activeNavStyles}>
              projects
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
      </StyledNav>
      <DrawerToggle click={props.drawerToggleClickHandler} />
    </StyledHeader>
  )
}

export { Header }
