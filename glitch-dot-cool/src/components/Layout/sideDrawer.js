import React from "react"
import styled from "styled-components"

import { GatsbyLink } from "../../utils/utilComponents"
import { activeNavStyles } from "../../utils/utils"
import { LinkIcons } from "./LinkIcons"

const DrawerTextStyles = {
  fontSize: `4rem`,
  backgroundColor: `${props => props.theme.colors.scale_1}`,
  color: `${props => props.theme.colors.scale_5}`,
}

const SideDrawer = props => {
  let slideOut, foldOut

  if (props.show) {
    slideOut = { transform: `translateX(0)` }
    foldOut = { transform: `rotate3d(1, 1, 1, 0)` }
  } else {
    slideOut = { transform: `translateX(110%)` }
    foldOut = { transform: `rotate3d(0, 1, 0, -90deg)` }
  }

  return (
    <Drawer style={slideOut}>
      <Nav style={foldOut}>
        <Centered column>
          <GatsbyLink
            style={DrawerTextStyles}
            to="/"
            activeStyle={activeNavStyles}
          >
            home
          </GatsbyLink>

          <GatsbyLink
            style={DrawerTextStyles}
            to="/about/"
            activeStyle={activeNavStyles}
          >
            about
          </GatsbyLink>

          <GatsbyLink
            style={DrawerTextStyles}
            to="/projects/"
            activeStyle={activeNavStyles}
          >
            projects
          </GatsbyLink>

          <GatsbyLink
            style={DrawerTextStyles}
            to="/members/"
            activeStyle={activeNavStyles}
          >
            members
          </GatsbyLink>

          <GatsbyLink
            style={DrawerTextStyles}
            to="/contact/"
            activeStyle={activeNavStyles}
          >
            contact
          </GatsbyLink>

          <NavLinkIcons />
        </Centered>
      </Nav>
    </Drawer>
  )
}

export default SideDrawer

const Drawer = styled.nav`
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.colors.scale_5},
    ${props => props.theme.colors.scale_4}
  );
  box-shadow: -15px 0px 20px rgba(0, 0, 0, 0.45);
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

  a {
    margin-bottom: 2rem;
  }
`

const Nav = styled.div`
  height: 100%;
  transition: 0.15s ease transform 0.2s;
  margin-bottom: 2rem;
`

const NavLinkIcons = styled(LinkIcons)`
  position: absolute;
  bottom: 25px;
  display: flex;
  justify-content: space-between;
  width: 78%;

  a {
    margin: 0;
  }
`
