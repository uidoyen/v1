import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "@styles"
const { fonts } = theme

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #eee;
  margin: 70px 0;
`
const StyledHeading = styled.h1`
  text-transform: uppercase;
  margin-bottom: 0;
  font-family: ${fonts.Oswald};
  font-size: 4vw;
`
const StyledSubHeading = styled.p`
  font-family: ${fonts.Oswald};
  font-size: 14px;
`
const BlogHeader = () => (
  <StyledContainer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <StyledHeading>Ansari's Blog</StyledHeading>
      <StyledSubHeading>
        THE BEST PLACE TO LEARN ABOUT CODE, DESIGN & BUSINESS.
      </StyledSubHeading>
    </div>
  </StyledContainer>
)

BlogHeader.propTypes = {
  siteTitle: PropTypes.string
}

BlogHeader.defaultProps = {
  siteTitle: ``
}

export default BlogHeader
