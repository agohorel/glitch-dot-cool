import React from "react"
import styled from "styled-components"

import { StyledList, GatsbyLink, Centered } from "../utils/utilComponents"
import { activeNavStyles } from "../utils/utils"

const Drawer = styled.nav`
  height: 100%;
  background: white;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  top:0;
  right: 0;
  width: 67%;
  max-width: 400px;
  z-index: 200;
  transition: .2s ease-out transform;
`

const SideDrawer = props => {
    let slideOut
    props.show
      ? (slideOut = { transform: `translateX(0)` })
      : (slideOut = { transform: `translateX(100%)` })

      return (
        <Drawer style={slideOut}>
          <ul>
            <Centered column>
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
            </Centered>
          </ul>
        </Drawer>
      )
}

export default SideDrawer
