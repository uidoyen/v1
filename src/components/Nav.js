import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useLayoutEffect
} from "react"
import debounce from "lodash.debounce"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { StaticQuery, graphql, Link } from "gatsby"
import { throttle } from "@utils"
import { navHeight } from "@config"
import logo from "../images/uidoyen.svg"
import MobileNav from "./MobileNav"
import styled from "styled-components"
import MenuItem from "./MenuItem"
import { Container, media, theme, mixins } from "@styles"
const { colors, fontSizes, fonts } = theme

const MENU_QUERY = graphql`
  fragment MenuItem on WPGraphQL_MenuItem {
    id
    label
    url
    title
    target
  }

  query GETMAINMENU {
    wpgraphql {
      menuItems(where: { location: MENU_1 }) {
        nodes {
          ...MenuItem
        }
      }
      generalSettings {
        url
      }
    }
  }
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 3;
  background-color: ${colors.Mirage};
  
  /* border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.isFrontPage ? `transparent` : `#eee`}; */
`
const StyledContainer = styled(Container)``
const StyledNav = styled.nav`
  ${mixins.flexBetween};
  flex: 1;
  z-index: 12;
  /* padding: 10px 0; */
  position: relative;
`
const StyledNavContainer = styled.div`
  ${mixins.flexCenter};
  display: none;
  ${media.tablet`display: block;`};
`
const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  list-style: none;
  li {
    margin-left: 2.1875vw;
    font-size: ${fontSizes.md};
    a {
      color: ${colors.Mimosa};
    }
  }
`
const StyledLogo = styled.div`
  display: flex;
`
const StyledLogoImage = styled.img`
  width: 40px;
`
const StyledHamburger = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  cursor: pointer;
  ${media.tablet`display: none;`};

  span {
    position: relative;
    margin-top: 9px;
    margin-bottom: 9px;
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -1.5px;
  }
`
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`
const StyledHamburgerInner = styled.div`
  background-color: ${colors.white};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${colors.white};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`

function Nav({ isFrontPage }) {
  const [isMounted, setIsMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <StyledHeader isFrontPage={isFrontPage}>
      <StyledContainer>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <StyledLogo>
                  <Link to="/">
                    <StyledLogoImage src={logo} alt="logo" />
                  </Link>
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <StyledHamburger onClick={toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
            )}
          </TransitionGroup>
          <StyledNavContainer>
            <StyledNavList>
              <StaticQuery
                query={MENU_QUERY}
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
          </StyledNavContainer>
        </StyledNav>
        <MobileNav
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          MENU_QUERY={MENU_QUERY}
        />
      </StyledContainer>
    </StyledHeader>
  )
}
export default Nav
