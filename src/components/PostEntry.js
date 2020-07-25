import React from "react"
import { Link } from "gatsby"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import styled from "styled-components"
// import Image from "./Image"
import FluidImage from "./fluidImage"
import { blogURI } from "../../globals"
import Buttons from "./buttons"
import { media, theme } from "@styles"
const { colors } = theme
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo("en-US")

const StyledContainer = styled.div`
  margin-bottom: 4vh;
`
const StyledDate = styled.p`
  color: ${colors.white};
  font-size: 1.6rem;
  padding-bottom: 5px;
  letter-spacing: -2px;
`
const StyledTitle = styled.h2`
  margin-bottom: 0px;
  font-size: 28px;
  font-weight: 400;
  color: ${colors.Chinook};
  ${media.tablet`font-size: 3vw;`};
  ${media.giant`font-size: 2.5vw;`};
`
const StyledFeaturedImage = styled(FluidImage)`
  margin: 3vh 0;
`
const StyledContent = styled.div`
  color: ${colors.white};
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
  background-color: ${colors.Keppel};
  display: inline-block;
  color: ${colors.white};
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 12px;
`

const PostEntry = ({ post }) => {
  const { uri, title, featuredImage, date, excerpt, categories } = post
  const { nodes } = categories
  // console.log(nodes)
  return (
    <StyledContainer>
      <MetaData>
        <MetaDataList>
          {nodes &&
            nodes.map(category => {
              return (
                <MetaDataItem key={category.name}>{category.name}</MetaDataItem>
              )
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
      <StyledContent dangerouslySetInnerHTML={{ __html: excerpt }} />
      <ButtonContainer>
        <Buttons dark="true" small="true" url={`/${blogURI}${uri}`}>
          Continue Reading
        </Buttons>
      </ButtonContainer>
    </StyledContainer>
  )
}

export default PostEntry
