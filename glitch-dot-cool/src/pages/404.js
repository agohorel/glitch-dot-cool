import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { Centered, StyledLink } from "../utils/utilComponents"

const NotFound = () => {
  const goBack = e => {
    e.preventDefault()
    if (typeof window !== `undefined`) {
      window.history.back()
    }
  }

  return (
    <Layout>
      <Head title="404" />
      <Centered column style={{ marginTop: `25vh` }}>
        <h1>Sorry - this page doesn't exist.</h1>
        <p>but what does it mean to exist, anyway? you know?</p>
        <br />
        <StyledLink onClick={goBack}>
          <GoBack>Go Back</GoBack>
        </StyledLink>
      </Centered>
    </Layout>
  )
}

export default NotFound

const GoBack = styled.h2`
  :hover {
    cursor: pointer;
  }
`
