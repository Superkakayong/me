//Librairies
import styled from 'styled-components'

//Variables
import { mediaSize } from '../../config/variables'

type StickersContainer = {
  location: string
}

export const StickersContainer = styled.div<StickersContainer>`
  width: 14em;
  height: 14em;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => (props.location === '/contact' ? '0%' : '18%')};
  right: ${(props) => (props.location === '/contact' ? '28%' : '22%')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${mediaSize.phone} {
    top: 49%;
    right: 18%;
  }
`
