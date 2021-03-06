import React from "react"
import { blogURI } from "../../globals"
import styled from "styled-components"
import { theme } from "@styles"
const { colors } = theme
console.log(blogURI)
const StyledPrev = styled.a`
  background-color: ${colors.black};
  border-radius: 3px;
  color: ${colors.white};
  padding: 6px 20px;

  &:hover {
    background-color: ${colors.CuttySark};
  }
`
const StyledNext = styled.a`
  border-radius: 3px;
  color: ${colors.white};
  padding: 6px 20px;

  &:hover {
    background-color: ${colors.CuttySark};
  }
`
const StyledCurrentPage = styled.span`
  background-color: ${colors.Keppel};
  border-radius: 3px;
  color: ${colors.black};
  padding: 8px 20px;
`

const Pagination = ({ pageNumber, hasNextPage }) => {
  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <div style={{ margin: "60px auto", textAlign: "center" }}>
      <div>
        {pageNumber > 1 && (
          <StyledPrev
            className="prev page-numbers"
            href={
              pageNumber > 2
                ? `/${blogURI}/page/${pageNumber - 1}`
                : `/${blogURI}/`
            }
          >
            <span>Previous page</span>
          </StyledPrev>
        )}
        <StyledCurrentPage aria-current="page" className="page-numbers current">
          <span className="meta-nav screen-reader-text">Page </span>
          {pageNumber}
        </StyledCurrentPage>

        {hasNextPage && (
          <StyledNext
            className="next page-numbers"
            href={`/${blogURI}/page/${pageNumber + 1}`}
          >
            <span>Next page </span>
          </StyledNext>
        )}
      </div>
    </div>
  )
}

export default Pagination
