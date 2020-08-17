import React from "react"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import ContactForm from "../components/Forms/contactForm"

export default () => {
  return (
    <Layout>
      <Head title="contact" />
      <ContactForm></ContactForm>
    </Layout>
  )
}
