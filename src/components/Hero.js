import React, { Fragment } from "react"
import styled from "styled-components"
import { Section } from "@styles"
import { media, theme, mixins } from "@styles"
import Buttons from "./Buttons"
import Media from "react-media"
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
  font-family: ${fonts.FiraMono};
  font-weight: 400;
  font-size: 4vw;
  line-height: 1.2;
  z-index: 2;
  letter-spacing: -2px;
  color: ${colors.white};
`
const StyledHeadingMobile = styled.h1`
  font-family: ${fonts.FiraMono};
  font-weight: 400;
  font-size: 30px;
  z-index: 2;
  ${media.tablet`font-size: 40px;`};
`
const StyledAvatar = styled.img`
  width: 30vw;
  position: absolute;
  right: 0;
  z-index: 1;
  margin-top: 75px;

  ${media.thone`width: 25vw;margin-top: 0;`}
`
const StyledUnderline = styled.span`
  ${mixins.underline};
  color: ${colors.Keppel};
`
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3vh;
`
function Hero() {
  return (
    <StyledContainer>
      <StyledHero>
        <Media
          queries={{
            medium: "(max-width: 999px)"
          }}
        >
          {matches => (
            <Fragment>
              {matches.medium ? (
                <StyledHeadingMobile>
                  Hey, <StyledUnderline>I’m Ashique.</StyledUnderline> A web
                  developer based in India, Bangalore. Creating apps and web
                  pages.
                </StyledHeadingMobile>
              ) : (
                <StyledHeadingDesktop>
                  <div>
                    Hey, <StyledUnderline>I’m Ashique.</StyledUnderline> A web
                    developer
                  </div>
                  <div>
                    based in India, Bangalore. Creating apps and web pages.
                  </div>
                  {/* <div>pages.</div> */}
                </StyledHeadingDesktop>
              )}
            </Fragment>
          )}
        </Media>
        <ButtonContainer>
          <Buttons dark>Let's Talk</Buttons>
        </ButtonContainer>
        <StyledAvatar
          src="https://jesussandrea.com/static/media/avatar@3x.d22ba766.jpg"
          alt="Ashique Ansari Avatar"
        />
      </StyledHero>
    </StyledContainer>
  )
}
export default Hero
