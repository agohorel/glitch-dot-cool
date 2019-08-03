import React, { Component } from "react"
import styled from "styled-components"

import { Header } from "../components/header"
import Footer from "../components/footer"
import Backdrop from "../components/backdrop"
import SideDrawer from "../components/sideDrawer"

// eslint-disable-next-line
import styles from "../styles/global.css"
import colors from "../styles/colors"
import measurements from "../styles/measurements"

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
