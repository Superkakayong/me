//Librairies
import styled from 'styled-components'

//Variables
import { mediaSize } from '../../config/variables'

type TitleContainer = {
  active: boolean
}

export const AboutContainer = styled.main`
  width: 85vw;
  margin-top: 13vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 12em;

  @media ${mediaSize.phone} {
    margin-bottom: 4em;
  }
`

export const MainGraphismeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.5em;
  margin-bottom: 2em;

  @media ${mediaSize.phone} {
    margin-top: 12.5em;
  }
`

export const GraphismeContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;

  @media ${mediaSize.phone} {
    width: 100%;
  }
`

export const MainExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2em;
`

export const ExperienceContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;

  @media ${mediaSize.phone} {
    width: 100%;
  }
`

export const TitleContainer = styled.div<TitleContainer>`
  display: flex;
  justify-container: center;
  align-items: center;
  gap: 0.8em;
  opacity: ${(props) => (props.active === true ? '1' : '0')};
  transform: ${(props) =>
    props.active === true ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 500ms ease;

  @media ${mediaSize.phone} {
    opacity: 1;
    transform: translateY(0);
  }
`
