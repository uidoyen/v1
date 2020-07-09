import React from "react"
import { Link } from "gatsby"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import styled from "styled-components"
// import Image from "./Image"
import FluidImage from "./FluidImage"
import { blogURI } from "../../globals"
import Buttons from "./Buttons"
import { media } from "@styles"
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo("en-US")

const StyledContainer = styled.div`
  margin-bottom: 30px;
`
const StyledDate = styled.p`
  color: #bbb;
  font-size: 1.6rem;
  padding-bottom: 10px;
  letter-spacing: -2px;
`
const StyledTitle = styled.h2`
  margin-bottom: 0px;
  font-size: 28px;
  font-weight: 600;
  color: #278bdd;
  ${media.tablet`font-size: 3vw;`};
  ${media.giant`font-size: 2.5vw;`};
`
const StyledFeaturedImage = styled(FluidImage)`
  margin: 3vh 0;
`
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2vh;
`
const MetaData = styled.div``
const MetaDataList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const MetaDataItem = styled.li`
  background-color: black;
  display: inline-block;
  color: white;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
`

const PostEntry = ({ post }) => {
  const { uri, title, featuredImage, date, excerpt, categories } = post
  const { nodes } = categories
  console.log(nodes)
  return (
    <StyledContainer>
      <MetaData>
        <MetaDataList>
          {nodes &&
            nodes.map(category => {
              return <MetaDataItem>{category.name}</MetaDataItem>
            })}
        </MetaDataList>
      </MetaData>
      <header>
        <Link to={`/${blogURI}${uri}`}>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{timeAgo.format(new Date(date))}</StyledDate>
          <StyledFeaturedImage image={featuredImage} />
        </Link>
      </header>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      <ButtonContainer>
        <Buttons light small url={`/${blogURI}${uri}`}>
          Continue Reading
        </Buttons>
      </ButtonContainer>
    </StyledContainer>
  )
}

export default PostEntry
