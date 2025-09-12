//Librairies
import styled from 'styled-components'

//Variables
import { colors, fonts, fontSize, mediaSize } from '../../config/variables'

type PseudoElement = {
  active: boolean
}

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 13vh;
  position: absolute;

  @media ${mediaSize.phone} {
    width: 85vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8em;

  @media ${mediaSize.phone} {
    gap: 0;
  }
`

export const PseudoElement = styled.div<PseudoElement>`
  position: relative;
  z-index: 90;

  &::before {
    position: absolute;
    content: '';
    background-color: ${colors.primary};
    width: ${(props) => (props.active === true ? '100%' : '0%')};
    height: 2.5px;
    bottom: -15%;
    transition: width 0.7s ease;
  }

  &:hover::before {
    width: 50%;
  }
`

export const NavbarLinks = styled.span`
  color: ${colors.primary};
  text-transform: uppercase;
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  cursor: pointer;
  letter-spacing: 2px;

  @media ${mediaSize.phone} {
    display: none;
  }
`
