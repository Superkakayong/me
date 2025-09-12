//Librairies
import styled from 'styled-components'

//Variables
import { colors } from '../../config/variables'

export const MenuResponsiveContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0%;
  left: -100%;
  transform: translate(-50%, -50%);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.secondary}8c;
  backdrop-filter: blur(6px);
`

export const LinkContainer = styled.div`
  height: 15%;
  width: 35%;
  position: absolute;
  top: 13%;
  left: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;
`
