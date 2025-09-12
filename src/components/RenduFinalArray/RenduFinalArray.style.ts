//Libraires
import styled from 'styled-components'

//Variables
import { colors, fonts, fontSize, mediaSize } from '../../config/variables'

export const RenduFinalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 3em;
`

export const Title = styled.h4`
  color: ${colors.primary};
  font-size: ${fontSize.xl};
  font-family: ${fonts.OTR};
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const ArrayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1em;

  @media ${mediaSize.phone} {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1em;
  }
`

export const ThreeCol = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1em;

  @media ${mediaSize.phone} {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1em;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 2px;
`
