import React from "react"
import styled from "styled-components"

import { Header } from "../components/header"
import Footer from "../components/footer"

// eslint-disable-next-line
import styles from "../styles/global.css"
import colors from "../styles/colors"
import measurements from "../styles/measurements"

const Background = styled.div`
  width: 100%;
  height: calc(100vh - ${measurements.footerHeight}rem);
  padding-top: 3rem;
  background-color: ${colors.offwhite};
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 67%;
  padding: 0 5rem;
`

export default ({ children }) => (
  <Background>
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    <Footer />
  </Background>
)
