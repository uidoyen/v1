import React from "react"
import styled from "styled-components"
import { Container } from "@styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledContainer = styled(Container)`
  margin-top: 100px;
  margin: 100px auto;
  max-width: 1200px;

  ul {
    margin: 20px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledContainer>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </StyledContainer>
  </Layout>
)

export default NotFoundPage
