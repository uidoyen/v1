import React from "react"
import styled from "styled-components"
import { Section } from "@styles"
import { media, theme, mixins } from "@styles"
import Buttons from "./buttons"
const { fonts, colors } = theme

const StyledContainer = styled(Section)`
  width: 100%;
`
const StyledHero = styled.div`
  position: relative;
  height: calc(100vh - 87px);
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const StyledHeadingDesktop = styled.h1`
  font-family: ${fonts.Courier};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  z-index: 2;
  letter-spacing: -2px;
  color: ${colors.white};
  ${media.tablet`font-size: 4vw;`};
`
const StyledUnderline = styled.span`
  ${mixins.underline};
  color: ${colors.Keppel};
`
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3.5vh;
`
function Hero() {
  return (
    <StyledContainer>
      <StyledHero>
            <StyledHeadingDesktop>
              <div>
                Hey, <StyledUnderline>I’m Ashique Ansari.</StyledUnderline> 
              </div>
              <div>
              A web
                developer based in India, Bangalore. Build things for the web and mobile.
              </div>
            </StyledHeadingDesktop>
        <ButtonContainer>
          <Buttons url="/contact" dark="true">
            Let's Talk
          </Buttons>
        </ButtonContainer>
      </StyledHero>
    </StyledContainer>
  )
}
export default Hero
