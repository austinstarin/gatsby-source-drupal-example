require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Source Drupal Example`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_DRUPAL_BASEURL
      },
    },
  ]
}