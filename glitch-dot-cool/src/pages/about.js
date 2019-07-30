import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { Centered, flicker } from "../utils/utilComponents"
import colors from "../styles/colors"

const Wrapper = styled.div`
  margin: 12rem 4rem;
  max-width: 62rem;
  min-width: 45vw;
  padding: 4rem;
  background-color: ${colors.white};
  hyphens: auto;

  @media only screen and (max-width: 900px) {
    margin: 4rem 0;
    max-width: 100%;
  }
`

const GlitchDotCool = styled.strong`
  animation: ${flicker} .3s backwards 1;
`

export default () => {
  return (
    <Layout>
      <Head title="about" />
      <Centered column>
        <Wrapper lang={`en`}>
          <p>
            <GlitchDotCool>glitch[dot]cool</GlitchDotCool> is a group of digital creators who
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
