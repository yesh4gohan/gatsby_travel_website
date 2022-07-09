import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import { Link } from "gatsby"
import SEO from "../components/SEO"

export default ({ data }) => {
  const img_url = 'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg';
  return <Layout>
    <SEO title="Home" description="this is description" />
    <StyledHero home="true" img={img_url}>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <Link fade to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </StyledHero>
    <About />
  </Layout>
}
