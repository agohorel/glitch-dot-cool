import React from "react"
import styled from "styled-components"

import { StyledList, GatsbyLink } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"
import colors from "../styles/colors"

const Drawer = styled.nav`
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    ${colors.offwhite},
    ${colors.midgrey}
  );
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  width: 67%;
  max-width: 400px;
  z-index: 200;
  transition: 0.2s ease-out transform;
`

const Centered = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${props => (props.column ? `column` : `row`)};
  justify-content: center;
  align-items: left;
  padding: 4rem;
`

const Nav = styled.ul`
  height: 100%;
  transition: 0.15s ease transform 0.2s;
`

const DrawerTextStyles = {
  fontSize: `4rem`,
}

const SideDrawer = props => {
  let slideOut, slideDown

  if (props.show) {
    slideOut = { transform: `translateX(0)` }
    slideDown = { transform: `translateY(0)` }
  } else {
    slideOut = { transform: `translateX(110%)` }
    slideDown = { transform: `translateY(-110%)` }
  }

  return (
    <Drawer style={slideOut}>
      <Nav style={slideDown}>
        <Centered column>
          <StyledList drawer>
            <GatsbyLink
              style={DrawerTextStyles}
              to="/"
              activeStyle={activeNavStyles}
            >
              home
            </GatsbyLink>
          </StyledList>
          <StyledList drawer>
            <GatsbyLink
              style={DrawerTextStyles}
              to="/about/"
              activeStyle={activeNavStyles}
            >
              about
            </GatsbyLink>
          </StyledList>
          <StyledList drawer>
            <GatsbyLink
              style={DrawerTextStyles}
              to="/projects/"
              activeStyle={activeNavStyles}
            >
              projects
            </GatsbyLink>
          </StyledList>
          <StyledList drawer>
            <GatsbyLink
              style={DrawerTextStyles}
              to="/feeds/"
              activeStyle={activeNavStyles}
            >
              feeds
            </GatsbyLink>
          </StyledList>
          <StyledList drawer>
            <GatsbyLink
              style={DrawerTextStyles}
              to="/contact/"
              activeStyle={activeNavStyles}
            >
              contact
            </GatsbyLink>
          </StyledList>
        </Centered>
      </Nav>
    </Drawer>
  )
}

export default SideDrawer
