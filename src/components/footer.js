import React from "react"
import styled from "styled-components"
import { Container, mixins, theme } from "@styles"
import smiley from "../images/smiley.svg"
import { name } from "@config"
const { colors, fontSizes } = theme

const StyledFooter = styled.footer`
  ${mixins.flexBetween};
  padding-top: 1.6rem;
  padding-bottom: 2rem;
  font-size: ${fontSizes.sm};
`
const StyledMadeWith = styled(Container)`
  ${mixins.flexBetween};
  img {
    width: 15px;
    margin-left: 0.6rem;
  }
`
const StyledCopyright = styled.div`
  color: ${colors.Mimosa};
`
const StyledBuiltWith = styled.div`
  display: flex;
`
const StyledContent = styled.p`
  color: ${colors.Mimosa};
  margin: 0;
  padding: 0;
`

function Footer() {
  return (
    <StyledFooter>
      <StyledMadeWith>
        <StyledBuiltWith>
          <StyledContent>
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </StyledContent>
          <img src={smiley} alt="Smiley Face - Brand"></img>
        </StyledBuiltWith>

        <StyledCopyright>
          © {new Date().getFullYear()} — {name}
        </StyledCopyright>
      </StyledMadeWith>
    </StyledFooter>
  )
}
export default Footer
