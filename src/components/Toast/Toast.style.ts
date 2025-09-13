//Librairies
import styled from 'styled-components'

//Variables
import { colors, fontSize, fonts, mediaSize } from '../../config/variables'

type ToastContainer = {
  type: 'success' | 'erreur'
}

type TitleType = {
  type: 'success' | 'erreur'
}

type Message = {
  type: 'success' | 'erreur'
}

export const ToastContainer = styled.div<ToastContainer>`
  position: fixed;
  bottom: 2%;
  left: 50%;
  width: 30%;
  height: 9%;
  background-color: ${(props) =>
    props.type === 'success' ? colors.success : colors.error}38;
  transform: translateX(-50%);
  border-radius: 7px;
  border: 1.5px solid
    ${(props) => (props.type === 'success' ? colors.success : colors.error)};
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5em;
  backdrop-filter: blur(5px);

  @media ${mediaSize.phone} {
    width: 75%;
  }
`

export const TitleType = styled.h5<TitleType>`
  color: ${(props) =>
    props.type === 'success' ? colors.success : colors.error};
  font-family: ${fonts.WorkSans};
  font-size: ${fontSize.md};
  text-transform: uppercase;
`

export const Message = styled.p<Message>`
  color: ${(props) =>
    props.type === 'success' ? colors.success : colors.error};
  font-family: ${fonts.WorkSans};
  font-size: ${fontSize.xs};
  text-transform: uppercase;
`
