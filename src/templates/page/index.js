import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FluidImage from "../../components/FluidImage"
import Hero from "../../components/Hero"
import styled from "styled-components"
import { Container, theme } from "@styles"
const { fonts, colors } = theme

const StyledContainer = styled(Container)`
  margin-top: 100px;
  margin: 100px auto;
  max-width: 1200px;
  ul {
    margin: 20px;
  }
`
const StyledHeading = styled.h1`
  font-family: ${fonts.RobotoMono};
  color: ${colors.Chinook};
`

const Page = ({ pageContext }) => {
  const {
    page: { title, content, featuredImage, isFrontPage }
  } = pageContext
  return (
    <Layout isFrontPage={isFrontPage}>
      <SEO title={title} />
      {isFrontPage ? (
        <div>
          <Hero />
        </div>
      ) : (
        <StyledContainer>
          <FluidImage image={featuredImage} style={{ marginBottom: "15px" }} />
          <StyledHeading> {title} </StyledHeading>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </StyledContainer>
      )}
    </Layout>
  )
}

export default Page
