import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.small ? `40px` : `50px`)};
  border-width: 1px;
  border-style: solid;
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: ${props => (props.small ? `0 15px` : `0 30px`)};
  margin-bottom: 20px;
  background-color: ${props =>
    props.naked ? `transparent` : `${props.light ? "#E5FCC2" : "#594F4F"}`};

  border-color: ${props =>
    props.naked ? `black` : `${props.light ? "#E5FCC2" : "#594F4F"}`};

  color: ${props =>
    props.naked ? `black` : `${props.light ? "#594F4F" : "#E5FCC2"}`};

  span {
    background: ${props =>
      props.naked ? `black` : `${props.light ? "#594F4F" : "#E5FCC2"}`};
    width: 20px;
    height: 2px;
    display: inline-block;
    margin-left: 20px;
  }

  i {
    border-color: transparent transparent transparent
      ${props => (props.naked ? `black` : `${props.light ? "black" : "white"}`)};
    width: 0;
    height: 0;
    display: inline-block;
    margin-left: 0;
    margin-right: auto;
    border-style: solid;
    border-width: 4px 0 4px 4px;
    opacity: 1;
  }
  &:hover {
    text-decoration: none;
    span {
      width: 50px;
      margin-left: 20px;
    }
    i {
      opacity: 0;
    }
  }
  * {
    transition: all 0.25s ease-in-out;
  }
`

const Buttons = props => {
  console.log(props)
  return (
    <StyledButton {...props} to={props.url}>
      {props.children}
      <span></span> <i></i>
    </StyledButton>
  )
}
Buttons.defaultProps = {
  dark: false,
  light: true,
  naked: false,
  small: false,
  url: ""
}
Buttons.propTypes = {
  dark: PropTypes.bool,
  light: PropTypes.bool,
  naked: PropTypes.bool,
  small: PropTypes.bool
}
export default Buttons
