//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, fonts, colors, mediaSize } from '../../config/variables'

export const Title = styled.h4`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: ${fontSize.md};
  font-weight: normal;
  letter-spacing: 4px;

  @media ${mediaSize.phone} {
    white-space: nowrap;
  }
`
