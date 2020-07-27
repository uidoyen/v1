let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
path: `.env.${activeEnv}`
})
const config = require("./src/config")

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: `uidoyen.com`,
    description: `Ashique Hussain Ansari is a software engineer based in Bangalore, India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
    siteKeywords:
      "Ashique Hussain Ansari, Ashique Ansari, Hussain Ansari, uidoyen, software engineer, front-end engineer, web developer, javascript, bangalore",
    author: `Ashique Hussain Ansari`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/category/*`, `/dev-404-page`, `/404`, `/offline-plugin-app-shell-fallback`],
        sitemapSize: 5000
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Advanced`,
        short_name: `gatsby-starter-wordpress-advanced`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `${process.env.WORDPRESS_URL}/graphql`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `uidoyen`
      }
    }
  ]
}
