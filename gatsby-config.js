/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `美味しい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `https://suspicious-jennings-fb87c3.netlify.app`,
    locale: `ja_JP`,
    fbappid: `260766188595248`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
