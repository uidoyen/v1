import React from "react"
import { Link } from "gatsby"
import { blogURI } from "@config"
import styled from "styled-components"
import Social from "./Social"
import { media } from "@styles"

const StyledAside = styled.aside`
  flex: 1;
  margin-left: 3vw;
  max-width: 100vw;
  ${media.tablet`max-width: 23vw;`};
`
const StyledWidget = styled.div`
  margin-bottom: 30px;
  color: black;
`
const StyledWidgetTitle = styled.h3`
  padding: 13px 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  margin-bottom: 30px;
  font-size: 14px;
  border-bottom: 1px solid #000 !important;
`
const StyledWidgetList = styled.ul``
const StyledWidgettItem = styled.li`
  margin-bottom: 9px;
  padding-bottom: 9px;
  list-style: none;
  border-bottom: 1px dotted #d5d5d5;
`
const StyledWidgetLink = styled(Link)`
  transition: color 0.25s ease-out;
`

function Sidebar({ allPosts }) {
  return (
    <StyledAside>
      <StyledWidget>
        <StyledWidgetTitle>SUPPORT THIS BLOG</StyledWidgetTitle>
        <Social />
      </StyledWidget>
      <StyledWidget>
        <StyledWidgetTitle>RECENT POSTS</StyledWidgetTitle>
        <StyledWidgetList>
          {allPosts &&
            allPosts.map(post => (
              <StyledWidgettItem key={post.id}>
                <StyledWidgetLink to={`/${blogURI}${post.uri}`}>
                  {post.title}
                </StyledWidgetLink>
              </StyledWidgettItem>
            ))}
        </StyledWidgetList>
      </StyledWidget>
      <StyledWidget>
        <StyledWidgetTitle>TOP POSTS</StyledWidgetTitle>
        <StyledWidgetList>
          {allPosts &&
            allPosts.map(post => (
              <StyledWidgettItem key={post.id}>
                <StyledWidgetLink to={`/${blogURI}${post.uri}`}>
                  {post.title}
                </StyledWidgetLink>
              </StyledWidgettItem>
            ))}
        </StyledWidgetList>
      </StyledWidget>
    </StyledAside>
  )
}
export default Sidebar
