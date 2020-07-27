import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FluidImage from "../../components/fluidImage"
import { Container, media, theme } from "@styles"
import styled from "styled-components"
import { blogURI } from "@config"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
const { colors } = theme

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 100px auto 0;
  flex: 1;
`
const StyledContent = styled.article`
  flex: 1;
  margin-bottom: 40px;
`
const StyledTitle = styled.h1`
  margin-bottom: 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${colors.Chinook};
  ${media.tablet`font-size: 3vw;`};
`
const StyledContentInner = styled.div`
  margin: 40px 0;

  a:hover {
    background-color: ${colors.CuttySark};
  }
`

const Post = ({ pageContext, isFrontPage }) => {

  const {
    post: { title, id, content, featuredImage, uri }
  } = pageContext

  let disqusConfig = {
    url: `${process.env.WORDPRESS_URL}/${blogURI + uri}`,
    identifier: id,
    title: title
  }
  return (
    <Layout isFrontPage={isFrontPage}>
      <SEO title={title} />
      <StyledContainer>
        <StyledContent>
          <FluidImage image={featuredImage} style={{ marginBottom: "15px" }} />
          <StyledTitle> {title} </StyledTitle>
          <StyledContentInner dangerouslySetInnerHTML={{ __html: content }} />
          <CommentCount config={disqusConfig} placeholder={"..."} />
          <Disqus config={disqusConfig} />
        </StyledContent>
      </StyledContainer>
    </Layout>
  )
}
Post.defaultProps = {
  isFrontPage: false
}
export default Post
