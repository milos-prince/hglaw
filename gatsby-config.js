module.exports = {
  siteMetadata: {
    title: `Leslie Belloc-Pinder Arbitration`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id aliquet enim. Pellentesque tempus felis eros, ut volutpat metus consequat a. Ut cursus egestas iaculis. Nullam vitae finibus ex.`,
    author: `www.bigshrek.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
