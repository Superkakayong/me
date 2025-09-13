//Librairies
import styled from 'styled-components'

//Variables
import { colors, fonts, fontSize } from '../../config/variables'

export const Container = styled.div`
  border-radius: 2%;
  border: 2px solid ${colors.primary};
  overflow: hidden;
  cursor: pointer;
  height: 100%;

  &:hover img {
    transform: scale(1.1);
  }
`

export const ImgContainer = styled.div`
  height: 70%;
  width: 100%;
  border-bottom: 2px solid ${colors.primary};
  overflow: hidden;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 500ms ease;
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${colors.secondary};
  border-bottom-left-radius: 2%;
  border-bottom-right-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProjectTitleContainer = styled.div`
  height: 65%;
  width: 100%;
  padding-top: 0.3em;
  padding-left: 0.5em;
`

export const BottomContainer = styled.div`
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
`

export const ProjectTitle = styled.div`
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  color: ${colors.primary};
  letter-spacing: 2px;
`
