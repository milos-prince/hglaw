module.exports = {
  siteMetadata: {
    title: `Hnatyshyn-Gough Law`,
    description: `At Hnatyshyn Gough, we have assembled a team of lawyers to ensure our clients have access to a wide range of legal expertise in one location. Our firm is built on a broad foundation of knowledge, solidified by years of experience in every key area of legal practice. We have been practicing law in the Saskatoon area for over 85 years.`,
    author: `www.bigshrek.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3D3D45`,
        theme_color: `#3D3D45`,
        display: `minimal-ui`,
        icon: `src/images/circle.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
