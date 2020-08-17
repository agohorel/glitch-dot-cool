import React, { useState } from "react"
import styled from "styled-components"

import { Header } from "./header"
import Footer from "./footer"
import Backdrop from "./backdrop"
import SideDrawer from "./sideDrawer"

import "../../styles/global.css"
import colors from "../../styles/colors"
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
