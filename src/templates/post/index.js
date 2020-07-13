import React, { useEffect } from "react"
import Prism from "prismjs"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import FluidImage from "../../components/FluidImage"
import { Container, media, theme } from "@styles"
import styled from "styled-components"
import { blogURI } from "@config"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
const {colors} = theme;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 100px auto 0;
  ${media.tablet`flex-direction: row;`};
`
const StyledContent = styled.article`
  flex: 1;
  margin-bottom: 40px;
  ${media.tablet`flex: 2;`};
`
const StyledTitle = styled.h1`
  margin-bottom: 0px;
  font-size: 28px;
  line-height: 1.2;
  color: ${colors.Chinook};
  ${media.tablet`font-size: 3vw;`};
`
const StyledContentInner = styled.div`
  margin: 40px 0;
`

const Post = ({ pageContext, isFrontPage }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

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
