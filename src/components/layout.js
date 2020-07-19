/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { GlobalStyle, Main } from "@styles"
import Nav from "./Nav"
import Footer from "./footer"
// import pattern from "../images/as.gif"
// import { theme } from "@styles"
// const { colors } = theme

const StyledMain = styled(Main)``
// const StyledPattern = styled.div`
//   height: 10px;
//   width: 100%;
//   background-image: url(${pattern});
//   position: relative;
//   z-index: 4;
//   background-color: ${colors.blue};
//   background-attachment: fixed;
//   background-blend-mode: luminosity;
// `
const Layout = ({ children, isFrontPage }) => {
  return (
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://use.typekit.net/fxm4txi.css" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      {/* <StyledPattern></StyledPattern> */}
      <div>
        <Nav isFrontPage={isFrontPage} />
        <StyledMain>{children}</StyledMain>
        <Footer />
        {/* <StyledPattern></StyledPattern> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
