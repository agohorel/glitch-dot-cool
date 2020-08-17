import React, { Component } from "react"
import styled from "styled-components"

import { Header } from "./header"
import Footer from "./footer"
import Backdrop from "./backdrop"
import SideDrawer from "./sideDrawer"

import "../../styles/global.css"
import colors from "../../styles/colors"
import measurements from "../../styles/measurements"

const Background = styled.div`
  background-color: ${colors.offwhite};
`

const Wrapper = styled.div`
  min-height: calc(100vh - 4rem);
  margin: 0 auto;
  max-width: calc(2160px - (50vw));
  min-width: 50vw;
  padding: 0 3vw ${measurements.footerHeight}rem 3vw;
  transition: 0.2s ease-out all;

  @media only screen and (max-width: ${measurements.breakpointMobileNav}px) {
    padding: 0 3vw ${measurements.footerHeightMobile}rem 3vw;
  }
`

class Layout extends Component {
  state = {
    sideDrawerOpen: false,
    backdropVisible: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropToggleClickHandler = () => {
    this.setState(() => {
      return { sideDrawerOpen: false }
    })
  }

  render() {
    return (
      <Background>
        <Wrapper>
          <Header drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          <Backdrop
            show={this.state.sideDrawerOpen}
            backdropToggleClickHandler={this.backdropToggleClickHandler}
          />
          {this.props.children}
        </Wrapper>
        <Footer />
      </Background>
    )
  }
}

export default Layout
