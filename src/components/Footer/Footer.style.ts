//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, fonts, colors, mediaSize } from '../../config/variables'

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 13vh;
`

export const Line = styled.div`
  position: asbolute;
  height: 2px;
  background-color: ${colors.primary};
  width: 90%;
  border-radius: 8px;
  top: 0;
  margin: 0 auto;
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const GoTop = styled.button`
  color: ${colors.primary};
  text-transform: uppercase;
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  cursor: pointer;
  letter-spacing: 2px;
  text-decoration: underline;
  background-color: transparent;
  border: none;

  @media ${mediaSize.phone} {
    font-size: ${fontSize.xs};
  }
`

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5em;

  @media ${mediaSize.phone} {
    gap: 0.5em;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    height: 60%;
  }
`

export const Links = styled.a`
  color: ${colors.primary};
  text-transform: uppercase;
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  cursor: pointer;
  letter-spacing: 2px;
  text-decoration: underline;

  @media ${mediaSize.phone} {
    font-size: ${fontSize.xxs};
  }
`

export const Credits = styled.p`
  height: 4vh;
  width: 100vw;
  text-align: center;
  color: ${colors.primary};
  font-family: ${fonts.WorkSans};
  font-size: ${fontSize.s};
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-bottom: 2em;

  @media ${mediaSize.phone} {
    font-size: ${fontSize.xs};
    margin-top: 1em;
  }
`
