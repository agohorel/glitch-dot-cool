import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { Centered } from "../utils/utilComponents"
import colors from "../styles/colors"

const Wrapper = styled.div`
  margin: 6rem 2rem;
  max-width: 31rem;
  min-width: 34vw;
  padding: 2rem;
  background-color: ${colors.lightgrey};

  @media only screen and (max-width: 900px) {
    margin: 2rem 0;
    max-width: 100%;
  }
`

export default () => {
  return (
    <Layout>
      <Head title="about" />
      <Centered column>
        <Wrapper>
          <p>
            <strong>glitch[dot]cool</strong> is a group of digital creators who
            share a common interest in glitch art. we are producers, sound
            designers, programmers, and visual artists.
          </p>
          <br />
          <p>
            this website serves as a shared publishing resource for our members
            and its contents, a shared resource for the public.
          </p>
        </Wrapper>
      </Centered>
    </Layout>
  )
}
