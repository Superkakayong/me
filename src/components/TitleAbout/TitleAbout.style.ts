//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, fonts, colors, mediaSize } from '../../config/variables'

export const Title = styled.h4`
  font-family: ${fonts.WorkSans};
  color: ${colors.primary};
  text-transform: none;
  font-size: ${fontSize.lg};
  font-weight: normal;
  letter-spacing: 1px;

  @media ${mediaSize.phone} {
    white-space: nowrap;
  }
`
