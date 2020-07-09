import React from "react"
import { CreateLocalLink } from "../utils"
import UniversalLink from "./UniversalLink"

const MenuItem = ({ id, menuItem, wordPressUrl }) => {
  return (
    <UniversalLink id={id} to={CreateLocalLink(menuItem, wordPressUrl)}>
      {menuItem.label}
    </UniversalLink>
  )
}

export default MenuItem
