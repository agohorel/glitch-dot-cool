import React from "react"
import styled from "styled-components"

import { Header } from "../components/header"
import Footer from "../components/footer"

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
  padding: 0 5rem ${measurements.footerHeight * 2}rem 5rem;
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
