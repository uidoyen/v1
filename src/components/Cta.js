import React from "react"
import styled from "styled-components"
import { theme } from "@styles"
const { colors } = theme

const StyledLine = styled.div`
  bottom: -1.25vw;
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  overflow: hidden;
  transform-origin: left;
  bottom: calc(-500vw / 400);

  &:after,
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: red;
    transition: transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    will-change: transform;
  }
  &:after {
    transform-origin: left;
    transform: scaleX(1);
    transition-delay: 0.25s;
    will-change: transform;
  }
`

const StyledLink = styled.a`
  padding-right: 0;
  font-size: 3.5vw;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  pointer-events: auto;
  cursor: pointer;
  text-align: right;
  width: auto;
  min-width: max-content;

  &:hover {
    color: ${colors.black};
    ${StyledLine} {
      &:before,
      &:after {
        transform-origin: right;
        transform: scaleX(0);
        transition-delay: 0s;
        background-color: green;
      }
      &:before {
        transform-origin: left;
        transform: scaleX(1);
        transition-delay: 0.25s;
        background-color: red;
      }
    }
  }
`

const StyledLinkInner = styled.div`
  position: relative;
`
const StyledLinkText = styled.div`
  overflow: hidden;
  line-height: 0.9;
  color: #010101;
`

const Cta = ({ children }) => {
  return (
    <StyledLink>
      <StyledLinkInner>
        <StyledLinkText>{children}</StyledLinkText>
        <StyledLine></StyledLine>
      </StyledLinkInner>
    </StyledLink>
  )
}
export default Cta
