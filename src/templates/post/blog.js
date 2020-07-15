import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import SEO from "../../components/seo"
import styled from "styled-components"
import { Container, media } from "@styles"

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 100px auto 0;
  ${media.tablet`flex-direction: row;`};
`

const StyledContent = styled.article`
  flex: 1;
  ${media.tablet`flex: 2;`};
`

const Blog = ({ pageContext, isFrontPage }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  return (
    <Layout isFrontPage={isFrontPage}>
      <SEO title="Blog" description="Blog posts" keywords={[`blog`]} />
      <StyledContainer>
        <StyledContent>
          {nodes &&
            nodes.map(post => <PostEntry key={post.postId} post={post} />)}
          <Pagination
            pageNumber={pageNumber}
            hasNextPage={hasNextPage}
            allPosts={allPosts}
            itemsPerPage={itemsPerPage}
          />
        </StyledContent>
      </StyledContainer>
    </Layout>
  )
}
Blog.defaultProps = {
  isFrontPage: false
}
export default Blog
