import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import config from '@config';
import ogImage from '@images/og.png';
function SEO({ description, lang, meta, title, siteKeywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: siteKeywords
        },
        {
          property: `name`,
          content: config.siteTitle
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image:type`,
          content: `image/png`
        },
        {
          property: `og:image:width`,
          content: `1200`
        },
        {
          property: `og:image:height`,
          content: `630`
        },
        {
          property: `og:locale`,
          content: config.siteLanguage
        },
        {
          name: `og:site_name`,
          content: title
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:site`,
          content: config.twitterHandle
        },
        {
          name: `twitter:url`,
          content: config.siteUrl
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: `${config.siteUrl}${ogImage}`
        }
      ].concat(meta)}
    >
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
