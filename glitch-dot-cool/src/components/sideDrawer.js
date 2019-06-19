import React from "react"
import styled from "styled-components"

import { StyledList, GatsbyLink, Centered } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"
import colors from "../styles/colors"

const Drawer = styled.nav`
  height: 100%;
  background: ${colors.offwhite};
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  width: 67%;
  max-width: 400px;
  z-index: 200;
  transition: 0.2s ease-out transform;
`

const DrawerTextStyles = {
  fontSize: `2rem`,
}

const SideDrawer = props => {
  let slideOut
  props.show
    ? (slideOut = { transform: `translateX(0)` })
    : (slideOut = { transform: `translateX(110%)` })

  return (
    <Drawer style={slideOut}>
      <ul style={{ height: `100%` }}>
        <Centered column>
          <StyledList drawer>
            <GatsbyLink style={DrawerTextStyles} to="/" activeStyle={activeNavStyles}>
              home
            </GatsbyLink>
          </StyledList>
          <StyledList drawer>
            <GatsbyLink style={DrawerTextStyles} to="/about/" activeStyle={activeNavStyles}>
              about
            </GatsbyLink>
          </StyledList>
          <StyledList drawer>
            <GatsbyLink style={DrawerTextStyles} to="/feeds/" activeStyle={activeNavStyles}>
              feeds
            </GatsbyLink>
          </StyledList>
          <StyledList drawer>
            <GatsbyLink style={DrawerTextStyles} to="/contact/" activeStyle={activeNavStyles}>
              contact
            </GatsbyLink>
          </StyledList>
        </Centered>
      </ul>
    </Drawer>
  )
}

export default SideDrawer
