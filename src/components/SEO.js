import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getSeoData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getSeoData)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* Facebook card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"siteTitle"} />
      <meta property="og:description" content={"siteDesc"} />
      <meta property="og:image" content={`${"siteUrl"}${"image"}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"siteTitle"} />
      <meta name="twitter:description" content={"siteDesc"} />
      <meta name="twitter:image" content={`${"siteUrl"}${"image"}`} />
    </Helmet>
  )
}

export default SEO
