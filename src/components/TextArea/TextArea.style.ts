//Librairies
import styled from 'styled-components'

//Variables
import { colors, fonts, fontSize } from '../../config/variables'

type TextAreaContainer = {
  focused: boolean
  placeholder: string
}

export const TextAreaContainer = styled.div<TextAreaContainer>`
  width: 100%;
  position: relative;

  &::after {
    position: absolute;
    content: '${(props) => props.placeholder}';
    font-family: ${fonts.OTR};
    color: ${colors.primary};
    top: ${(props) => (props.focused ? '-7%' : '5%')};
    left: 0;
    transform: translateY(-50%);
    transition: all 500ms ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
`

export const TextAreaElement = styled.textarea`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${colors.primary};
  padding: 4em 0;
  color: ${colors.primary};
  font-size: ${fontSize.md};
  font-family: ${fonts.WorkSans};
  resize: none;
  outline: none;
`
