import { createGlobalStyle } from "styled-components"
import theme from "./theme"
import FontFaces from "./fonts"
const { colors, fontSizes, fonts } = theme
const GlobalStyle = createGlobalStyle`
  ${FontFaces};
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

@font-face {
	font-family: SuisseIntl-Thin;
	src: url(https://d33wubrfki0l68.cloudfront.net/17b6d4ffae47e4313fc5926fe0310e91bfebbe0d/03294/static/media/suisseintl-thin.183ac768.eot);
  src: url(https://d33wubrfki0l68.cloudfront.net/17b6d4ffae47e4313fc5926fe0310e91bfebbe0d/03294/static/media/suisseintl-thin.183ac768.eot) format("embedded-opentype"), 
  url(https://d33wubrfki0l68.cloudfront.net/90d33acb26d6871d667a60fdd13623a9c6027126/b85c9/static/media/suisseintl-thin.34634bc4.svg) format("svg"), 
  url(https://d33wubrfki0l68.cloudfront.net/620dd1968110f0cd808abefaf52dd04140318e3b/b09bc/static/media/suisseintl-thin.e318debb.ttf) format("truetype"), 
  url(https://d33wubrfki0l68.cloudfront.net/fd5577a538021dba60577a96c0b4e93dd2a55329/bedc1/static/media/suisseintl-thin.b6248863.woff) format("woff"), 
  url(https://d33wubrfki0l68.cloudfront.net/9d1136f8bceb76bc2179b88f5e6071bba131b213/f02dc/static/media/suisseintl-thin.34bdbc14.woff2) format("woff2");
	font-weight: 400;
	font-style: normal
}

@font-face {
	font-family: SuisseIntl-Light;
	src: url(https://d33wubrfki0l68.cloudfront.net/7255ca504390def2c32d920da6ceaf1893d0c6ca/871b4/static/media/suisseintl-light.848e35f3.eot);
  src: url(https://d33wubrfki0l68.cloudfront.net/7255ca504390def2c32d920da6ceaf1893d0c6ca/871b4/static/media/suisseintl-light.848e35f3.eot) format("embedded-opentype"), 
  url(https://d33wubrfki0l68.cloudfront.net/e84bd005c21c77a6fabfcb0ebbd3f81744f43fdd/b6510/static/media/suisseintl-light.0fea08fc.svg) format("svg"), 
  url(https://d33wubrfki0l68.cloudfront.net/87565495e16c505216fe3004e633b4b87f3a5c05/0cff4/static/media/suisseintl-light.9be8b893.ttf) format("truetype"), 
  url(https://d33wubrfki0l68.cloudfront.net/acc38ab0a3bf06a406105a3d7fbf7204817c639d/a9100/static/media/suisseintl-light.f9951b5a.woff) format("woff"), 
  url(https://d33wubrfki0l68.cloudfront.net/2b867b15de35062badb6efcededfe6fb889ca7b4/33fd0/static/media/suisseintl-light.f4a0fc94.woff2) format("woff2");
	font-weight: 400;
	font-style: normal
}

@font-face {
	font-family: SuisseIntl-Regular;
	src: url(https://d33wubrfki0l68.cloudfront.net/fd690cc5ebc825fa781f92a17ef4b5fd6355cb36/e20c3/static/media/suisseintl-regular.5d8022e7.eot);
	src: url(https://d33wubrfki0l68.cloudfront.net/fd690cc5ebc825fa781f92a17ef4b5fd6355cb36/e20c3/static/media/suisseintl-regular.5d8022e7.eot) format("embedded-opentype"), url(https://d33wubrfki0l68.cloudfront.net/d0aa37e23a9b818209bf8f3b20ba08d8b6ba0bd5/21ad6/static/media/suisseintl-regular.2f5f20cc.svg) format("svg"), url(https://d33wubrfki0l68.cloudfront.net/114adb7c6ecdce210cf8c97fea98405e42fd6253/418d5/static/media/suisseintl-regular.bcf30b4b.ttf) format("truetype"), url(https://d33wubrfki0l68.cloudfront.net/2eb59fe7ce1d296d1e97ed12a7926376f398ff58/f97a4/static/media/suisseintl-regular.fa9e19ad.woff) format("woff"), url(https://d33wubrfki0l68.cloudfront.net/558867f7884b803a1446e513b14d5ca2597385cb/56974/static/media/suisseintl-regular.145f38f8.woff2) format("woff2");
	font-weight: 400;
	font-style: normal
}

@font-face {
	font-family: SuisseIntl-Book;
	src: url(https://d33wubrfki0l68.cloudfront.net/c7305cb5138173b60d3a0bfd8123b0ccb12f9a4a/d417b/static/media/suisseintl-book.39ec4934.eot);
	src: url(https://d33wubrfki0l68.cloudfront.net/c7305cb5138173b60d3a0bfd8123b0ccb12f9a4a/d417b/static/media/suisseintl-book.39ec4934.eot) format("embedded-opentype"), url(https://d33wubrfki0l68.cloudfront.net/d66061c091c2d3d46de9efc5f44c4041adf002d9/4d48b/static/media/suisseintl-book.1011b374.svg) format("svg"), url(https://d33wubrfki0l68.cloudfront.net/d2a4f70c9848991740a0534853f47229b95fc185/630cb/static/media/suisseintl-book.8b92e96c.ttf) format("truetype"), url(https://d33wubrfki0l68.cloudfront.net/18c0df2a4f91f0388cc3d3e45f4598d790c9d8fa/3fbb2/static/media/suisseintl-book.ceb5ac42.woff) format("woff"), url(https://d33wubrfki0l68.cloudfront.net/c09ebc6a38278e2292499bed8fefaee50ffa1e8e/d8a61/static/media/suisseintl-book.0acdbb58.woff2) format("woff2");
	font-weight: 400;
	font-style: normal
}

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.Mirage};;
    color: ${colors.white};
    line-height: 1.6;
    font-size: 14px;
    font-family: ${fonts.SFMono};
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
  h5 {
    font-family: ${fonts.SFMono};
    color: ${colors.Chinook};
    margin: 0 0 10px 0;
    font-weight: 500;
    line-height: 1.2;
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
  p {
    margin: 0 0 20px 0;
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
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
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
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  cite{
    font-weight: 600;
  }
  p{
    &:first-child{
      margin-bottom: 0
    }
    
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
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }        
`
export default GlobalStyle
