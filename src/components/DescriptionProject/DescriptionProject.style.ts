//Librairies
import styled from 'styled-components'

//Variables
import { mediaSize } from '../../config/variables'

type ContainerTitleDescription = {
  active: boolean
}

type SideContainer = {
  side: 'left' | 'right'
}

export const SideContainer = styled.div<SideContainer>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.side === 'left' ? 'flex-start' : 'flex-end'};
`

export const DescriptionProjectContainer = styled.div`
  width: 70%;

  @media ${mediaSize.phone} {
    width: 100%;
  }
`

export const ContainerTitleDescription = styled.div<ContainerTitleDescription>`
  display: flex;
  justify-container: center;
  align-items: center;
  gap: 0.8em;
  opacity: ${(props) => (props.active === true ? '1' : '0')};
  transform: ${(props) =>
    props.active === true ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 500ms ease;
  margin-bottom: 1em;

  @media ${mediaSize.phone} {
    opacity: 1;
    transform: translateY(0);
  }
`
