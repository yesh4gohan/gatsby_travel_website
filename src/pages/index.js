import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import { Link } from "gatsby"
import SEO from "../components/SEO"

export default ({}) => {
  const img_url =
    "https://res.cloudinary.com/dlxstraey/image/upload/v1657374166/pexels-pixabay-270756_t8zooy.jpg"
  return (
    <Layout>
      <SEO title="Seven Lakes Trail" description="Kashmir Trek and Hikes" />
      <StyledHero home="true" img={img_url}>
        <Banner
          title="Seven Lakes Trail"
          info="Join us and discover the heaven on Earth Kashmir"
        >
          <Link fade to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
    </Layout>
  )
}
