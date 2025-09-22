//Libraires
import styled from 'styled-components'

//Variables
import { colors, fonts, fontSize, mediaSize } from '../../config/variables'

export const RenduFinalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 3em;
`

export const Title = styled.h4`
  color: ${colors.primary};
  font-size: ${fontSize.xl};
  font-family: ${fonts.OTR};
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const VideoContainer = styled.div`
  width: 75%;

  @media ${mediaSize.phone} {
    width: 100%;
  }
`

export const Video = styled.video`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${colors.primary};
  object-fit: cover;
`

export const ImgContainer = styled.div`
  width: 75%;
  position: relative;

  @media ${mediaSize.phone} {
    width: 100%;
  }
`

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${colors.primary};
  object-fit: cover;
`
