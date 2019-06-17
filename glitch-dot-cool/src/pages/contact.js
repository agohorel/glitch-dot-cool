import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import ContactForm from "../components/contactForm"

export default () => {
    return (
        <Layout>
            <Head title="contact"/>
            <ContactForm></ContactForm>
        </Layout>
    )
}