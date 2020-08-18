import React, { useState } from "react"
import styled from "styled-components"

import { Header } from "./header"
import { GlobalStyles } from "../../styles/globalStyles"
import Footer from "./footer"
import Backdrop from "./backdrop"
import SideDrawer from "./sideDrawer"

import "../../styles/global.css"
import measurements from "../../styles/measurements"

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const toggleNav = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const exitNav = () => {
    setSideDrawerOpen(false)
  }

  return (
    <Background>
      <GlobalStyles></GlobalStyles>
      <Wrapper>
        <Header toggleNav={toggleNav} />
        <SideDrawer show={sideDrawerOpen} />
        <Backdrop show={sideDrawerOpen} exitNav={exitNav} />
        {children}
      </Wrapper>
      <Footer />
    </Background>
  )
}

export default Layout

const Background = styled.div`
  background-color: ${props => props.theme.colors.scale_5};
  transition: 0.6s ease-in-out background-color;
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
