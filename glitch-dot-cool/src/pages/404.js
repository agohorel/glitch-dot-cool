import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyLink, Centered } from "../utils/utilComponents"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404"/>
      <Centered column style={{ marginTop: `25vh` }}>
        <h1>Sorry - this page doesn't exist.</h1>
        <p>but what does it mean to exist, anyway? you know?</p>
        <br />
        <h2>
          <GatsbyLink to="/">Return to Home page</GatsbyLink>
        </h2>
      </Centered>
    </Layout>
  )
}

export default NotFound
