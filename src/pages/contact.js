import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="contact" />
      <StyledHero img={""}></StyledHero>
      <Contact></Contact>
    </Layout>
  )
}

