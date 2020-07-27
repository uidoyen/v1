import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Prism from "prismjs"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { GlobalStyle, Main } from "@styles"
import Nav from "./nav"
import Footer from "./footer"
import Loader from "./loader"

const StyledMain = styled(Main)``
const Layout = ({ children, isFrontPage }) => {
  const [isLoading, setIsLoading] = useState(isFrontPage);
  useEffect(() => {
    Prism.highlightAll()
  },[])
  useEffect(() => {
    if (isLoading || isFrontPage) {
      return;
    }
  }, [isLoading])
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap" />
        <link href="https://use.typekit.net/fxm4txi.css" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      {isLoading && isFrontPage ? (
        <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
        <div>
          <Nav isFrontPage />
          <StyledMain>{children}</StyledMain>
          <Footer />
        </div>
        )
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
