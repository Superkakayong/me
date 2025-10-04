//Librairies
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

//Styles
import {
  NavbarContainer,
  LinksContainer,
  NavbarLinks,
  PseudoElement,
} from './Navbar.style'

//Components
import { ResponsiveMenu } from '../ResponsiveMenu/ResponsiveMenu'

//Icons
import { FaBars } from 'react-icons/fa'

//Variables
import { colors } from '../../config/variables'

//Hooks
import { useResponsiveMenu } from '../../hooks/useResponsiveMenu'

export const Navbar = () => {
  const { toggleMenu, active } = useResponsiveMenu()
  const location = useLocation()

  let responsiveMenuBar = {}

  if (window.matchMedia('(max-width: 576px)').matches) {
    responsiveMenuBar = { zIndex: 50 }
  } else {
    responsiveMenuBar = { display: 'none' }
  }

  return (
    <>
      <ResponsiveMenu active={active} />
      <NavbarContainer>
        <LinksContainer>
          <FaBars
            color={colors.primary}
            size={'1.5em'}
            style={responsiveMenuBar}
            onClick={toggleMenu}
          />
          <PseudoElement active={location.pathname === '/' ? true : false}>
            <Link to='/'>
              <NavbarLinks data-cursor>HOME</NavbarLinks>
            </Link>
          </PseudoElement>
          <PseudoElement active={location.pathname === '/about' ? true : false}>
            <Link to='/about'>
              <NavbarLinks data-cursor>ABOUT</NavbarLinks>
            </Link>
          </PseudoElement>
          <PseudoElement
            active={location.pathname === '/projects' ? true : false}
          >
            <Link to='projects'>
              <NavbarLinks data-cursor>PROJECTS</NavbarLinks>
            </Link>
          </PseudoElement>
        </LinksContainer>
        {/* Dayong: Contact button removed */}
      </NavbarContainer>
    </>
  )
}
