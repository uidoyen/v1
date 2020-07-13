/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GlobalStyle, Main } from "@styles"
import Nav from "./Nav"
import Footer from "./footer"
import pattern from "../images/as.gif"
import { Container, media, theme, mixins } from "@styles"
const { colors, fontSizes, fonts } = theme

// import "./layout.css"
const StyledMain = styled(Main)``
const StyledPattern = styled.div`
  height: 10px;
  width: 100%;
  background-image: url(${pattern});
  position: relative;
  z-index: 4;
  background-color: ${colors.blue};
  background-attachment: fixed;
  background-blend-mode: luminosity;
`
const Layout = ({ children, isFrontPage }) => {
  return (
    <>
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
