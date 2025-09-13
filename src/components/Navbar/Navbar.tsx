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
import { Button } from '../Button/Button'
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

  let responsiveButton = {}
  let responsiveMenuBar = {}

  if (window.matchMedia('(max-width: 576px)').matches) {
    responsiveButton = {}
    responsiveMenuBar = { zIndex: 50 }
  } else {
    responsiveButton = {
      position: 'absolute',
      top: '50%',
      right: '6%',
      transform: 'translate(-6%, -50%)',
    }
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
              <NavbarLinks data-cursor>ACCUEIL</NavbarLinks>
            </Link>
          </PseudoElement>
          <PseudoElement active={location.pathname === '/about' ? true : false}>
            <Link to='/about'>
              <NavbarLinks data-cursor>A PROPOS</NavbarLinks>
            </Link>
          </PseudoElement>
          <PseudoElement
            active={location.pathname === '/projects' ? true : false}
          >
            <Link to='projects'>
              <NavbarLinks data-cursor>PROJETS</NavbarLinks>
            </Link>
          </PseudoElement>
        </LinksContainer>
        <Link to='/contact'>
          <Button
            text={`CONTACT`}
            size={'md'}
            href='/contact'
            style={responsiveButton}
          />
        </Link>
      </NavbarContainer>
    </>
  )
}
