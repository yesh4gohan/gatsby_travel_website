
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Seven Lakes Trek",
    description:
      "Explore awesome Kashmir & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: "@happyashwanth04",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://gatsby-travel-site.netlify.com",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}
