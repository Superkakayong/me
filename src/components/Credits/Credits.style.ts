//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, colors, fonts, mediaSize } from '../../config/variables'

export const CreditsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Text = styled.span`
  font-family: ${fonts.WorkSans};
  color: ${colors.primary};
  font-size: ${fontSize.md};

  @media ${mediaSize.phone} {
    font-size: 0.1em;
  }
`
