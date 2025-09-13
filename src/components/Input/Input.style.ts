//Librairies
import styled from 'styled-components'

//Variables
import { colors, fontSize, fonts } from '../../config/variables'

type InputContainer = {
  focused: boolean
  placeholder: string
}

type InputElement = {
  valid: boolean
}

export const InputContainer = styled.div<InputContainer>`
  width: 100%;
  position: relative;

  &::after {
    position: absolute;
    content: '${(props) => props.placeholder}';
    font-family: ${fonts.OTR};
    color: ${colors.primary};
    top: ${(props) => (props.focused ? '-22%' : '50%')};
    left: 0;
    transform: translateY(-50%);
    transition: all 500ms ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
`

export const InputElement = styled.input<InputElement>`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${(props) =>
    props.valid ? colors.primary : colors.error}};
  padding: 0.8em 0;
  color: ${colors.primary};
  font-size: ${fontSize.md};
  font-family: ${fonts.WorkSans};
  outline: none;
`
