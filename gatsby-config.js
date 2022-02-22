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
    // 🚧 You can configure Contentful here, or any other CMS
    // during your CMS backoff!
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `your_space_id`,
    //     //Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
  ]
}