import React from "react"
import { socialMedia } from "@config"
import FormattedIcon from "./icons/formattedIcon"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`
const StyledSocialItem = styled.li`
  display: flex;
`
const StyledSocialLink = styled.a`
  padding: 10px;
  color: inherit;
  /* color: ${props => (props.colors === "white" ? `white` : `black`)}; */

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 18px;
    height: 18px;
  }
`
function Social() {
  return (
    <StyledSocial>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <StyledSocialItem key={i}>
              <StyledSocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                <FormattedIcon name={name} />
              </StyledSocialLink>
            </StyledSocialItem>
          ))}
      </StyledSocialList>
    </StyledSocial>
  )
}
Social.defaultProps = { color: "black" }
Social.propTypes = { color: PropTypes.string }
export default Social
