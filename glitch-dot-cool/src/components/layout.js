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
  margin: 0 auto;
  max-width: 67%;
  padding: 0 5rem ${measurements.footerHeight}rem 5rem;

  @media only screen and (max-width: 1200px) {
    max-width: 90%;
    padding: 0 2rem ${measurements.footerHeight}rem 2rem;
  }

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    padding: 0 2rem ${measurements.footerHeight}rem 2rem;
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
    this.setState( () => {
      return { sideDrawerOpen: false }
    })
  }

  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = (
        <Backdrop
          backdropToggleClickHandler={this.backdropToggleClickHandler}
        />
      )
    } 

    return (
      <Background>
        <Wrapper>
          <Header drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          {this.props.children}
        </Wrapper>
        <Footer />
      </Background>
    )
  }
}

export default Layout
