import { createGlobalStyle } from "styled-components"
import theme from "./theme"
const { colors, fontSizes, fonts } = theme

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }


  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.Mirage};
    color: ${colors.white};
    line-height: 1.6;
    font-size: 14px;
    font-family: ${fonts.Courier};
    font-weight: normal;
    font-size: 1.8rem;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;
      #root > #content > * {
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colors.Mimosa};
    color: white;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.Courier};
    color: ${colors.Chinook};
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.1;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.Mimosa};

    &:hover,
    &:focus {
      outline: 0;
    }
  }
  hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #efefef;
      margin: 1em 0;
      padding: 0;
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.blue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }

    &::placeholder {
    }

    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  ul, ol {
    padding: 0;
    margin: 0;
  }

  article{
    ul,
    ol{
      margin: 20px;
      ol, ul{
        margin: 0 20px 10px;
      }
    }
    ol{
      margin-left: 35px;
    }
  }
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }  

  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
      "Liberation Mono", Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }

  pre code {
    background: none;
    line-height: 1.42;
  }

  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: " ";
  }

  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: "";
  }
figcaption,
figure{
  display:block;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: ${fontSizes.sm}
}
table {
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 1.6rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;

  thead {
    text-align: left;
  }
  td,
  th {
    text-align: left;
    border-bottom: 1px solid ${colors.CuttySark};
    font-feature-settings: "tnum";
    padding:1rem;

    &:first-child{
      padding-left: 0;
    }
    &:last-child{
      padding-right: 0;
    }
  }
}

fieldset {
  padding: 0;
  margin: 0 0 1.45rem 0;
}

form {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

blockquote {
  display: flex;
  flex-direction: column;
  font-style: italic;
  background: ${colors.Keppel};
  border-left: 10px solid #ccc;
  margin: 1.5em 0;
  padding:0 10px;
  cite{
    font-weight: 600;
  }
  p{
    line-height: 1.2;
    margin: 0;
    padding: 10px 0;

    
  }
}

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }

  .overline {
    color: ${colors.green};
    font-family: ${fonts.Courier};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }        
`
export default GlobalStyle
