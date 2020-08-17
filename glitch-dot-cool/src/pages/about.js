import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import { Centered } from "../utils/utilComponents"
import { flicker } from "../styles/animations"

export default () => {
  return (
    <Layout>
      <Head title="about" />
      <Centered column>
        <Wrapper lang={`en`}>
          <p>
            <GlitchDotCool>glitch[dot]cool</GlitchDotCool> is a group of
            producers, sound designers, programmers, and visual artists orbiting
            the glitch aesthetic.
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

const Wrapper = styled.div`
  margin: 12rem 4rem;
  max-width: 62rem;
  min-width: 45vw;
  padding: 4rem;
  background-color: ${props => props.theme.colors.scale_6};
  hyphens: auto;
  color: ${props => props.theme.colors.scale_1};

  @media only screen and (max-width: 900px) {
    margin: 4rem 0;
    max-width: 100%;
  }
`

const GlitchDotCool = styled.strong`
  animation: ${flicker} 0.3s backwards 1;
`
