//Librairies
import styled from 'styled-components'

//Variables
import { colors } from '../../config/variables'

type CustomCursor = {
  size: number
}

export const CustomCursor = styled.div<CustomCursor>`
  position: fixed;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 999;
  &::after {
    content: '';
    position: absolute;
    width: ${(props) => props.size + 'px'};
    height: ${(props) => props.size + 'px'};
    border-radius: 50%;
    transform: translate(calc(-50% + 2.5px), calc(-50% + 2.5px));
    transition: all 0.6s;
    border: solid 1.5px ${colors.primary};
  }
`
