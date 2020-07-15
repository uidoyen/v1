import React, { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { StaticQuery } from "gatsby"
import styled from "styled-components"
import { media, theme } from "@styles"
import MenuItem from "./MenuItem"
import Social from "./Social"
const { colors, fontSizes } = theme

const StyledMenu = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  outline: 0;
  z-index: 10;
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  ${media.md`display: none;`};
`
const StyledMenuModal = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 50vw;
  height: 100%;
  padding: 50px;
  right: 0;
  margin-left: auto;
  background-color: ${colors.CuttySark};
  box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
`
const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 5vh 0 0;

  li {
    margin: 2.1875vw 0;
    font-size: ${fontSizes.lg};
    list-style: none;
    a {
      color: ${colors.Mimosa};
    }
  }
`
const StyledNavBottom = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`
function MobileNav({ menuOpen, menuQuery }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 100)
  }, [])

  return (
    <StyledMenu
      menuOpen={menuOpen}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <StyledMenuModal>
        <StyledNavList>
          <StaticQuery
            query={menuQuery}
            render={data => {
              if (data.wpgraphql.menuItems) {
                const menuItems = data.wpgraphql.menuItems.nodes
                const wordPressUrl = data.wpgraphql.generalSettings.url

                return (
                  <TransitionGroup component={null}>
                    {isMounted &&
                      menuItems &&
                      menuItems.map((menuItem, i) => (
                        <CSSTransition
                          key={i}
                          classNames="fadedown"
                          timeout={3000}
                        >
                          <MenuItem
                            key={i}
                            id={i}
                            menuItem={menuItem}
                            wordPressUrl={wordPressUrl}
                          />
                        </CSSTransition>
                      ))}
                  </TransitionGroup>
                )
              }
              return null
            }}
          />
        </StyledNavList>
        <StyledNavBottom>
          <Social />
        </StyledNavBottom>
      </StyledMenuModal>
    </StyledMenu>
  )
}
export default MobileNav
