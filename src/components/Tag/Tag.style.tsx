//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, colors, fonts } from '../../config/variables'

type GlobalTag = {
  size: 's' | 'md' | 'lg'
  main: boolean
}

export const GlobalTag = styled.a<GlobalTag>`
  font-family: ${fonts.WorkSans};
  color: ${colors.secondary};
  font-size: ${(props) =>
    props.size === 's'
      ? fontSize.xs
      : props.size === 'md'
      ? fontSize.md
      : fontSize.lg};
  text-transform: uppercase;
  border-radius: 15px;
  padding: 0.1em 0.8em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 49;
  background-color: ${(props) =>
    props.main === true ? colors.primary : colors.projectTag};
`
