//Librairies
import styled from 'styled-components'

//Variables
import {
  colors,
  fonts,
  bigLetters,
  fontSize,
  mediaSize,
} from '../../config/variables'

export const NavRoute = styled.div`
  height: 8vh;
  width: 90vw;
  margin-top: 13vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${mediaSize.phone} {
    overflow-x: scroll;
  }
`

export const NavText = styled.p`
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  color: ${colors.primary};
  text-transform: uppercase;

  @media ${mediaSize.phone} {
    font-size: ${fontSize.xs};
    white-space: nowrap;
  }
`

export const ImgProjectContainer = styled.div`
  height: 65vh;
  width: 100vw;

  @media ${mediaSize.phone} {
    height: 25vh;
  }
`
// Dayong: force imgAbout (ImgProject) to be 16:9 aspect ratio
// export const ImgProjectContainer = styled.div`
//   width: 100vw;
//   aspect-ratio: 16 / 9;
//   max-height: 65vh; /* 可选：不超过原来的高度 */
// `

export const ImgProject = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const OneProjectContainer = styled.main`
  width: 90vw;
`

export const TitleContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${colors.primary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Title = styled.h1`
  font-family: ${fonts.OTR};
  font-size: ${bigLetters.s};
  color: ${colors.primary};

  @media ${mediaSize.phone} {
    font-size: ${fontSize.xxl};
  }
`

export const CreditsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 1em;
`

export const DescriptionContainer = styled.div`
  margin-top: 8em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 75%;
  gap: 2em;
  margin-bottom: 12em;

  @media ${mediaSize.phone} {
    margin-top: 2em;
    justify-content: center;
  }
`
