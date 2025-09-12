//Librairies
import styled from 'styled-components'

//Variables
import { colors, fontSize, fonts, mediaSize } from '../../config/variables'

export const ProjectsContainer = styled.main`
  width: 85vw;
  min-height: 87vh;
  margin-top: 17vh;
  margin-bottom: 12em;
`

export const FilterContainer = styled.div`
  width: 100%;
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${mediaSize.phone} {
    overflow-x: scroll;
    align-items: initial;
  }
`

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.25fr));
  grid-gap: 15px;
  grid-auto-rows: 400px;
  margin-bottom: 3%;
  grid-auto-columns: 1fr;

  @media ${mediaSize.phone} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 360px;
  }
`

export const NoProject = styled.p`
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  color: ${colors.primary};
  text-transform: uppercase;
  width: 30em;

  @media ${mediaSize.phone} {
    width: 20em;
    margin-top: 2em;
  }
`
