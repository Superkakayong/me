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
  font-size: ${fontSize.xxl};
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

export const Video = styled.video.attrs({
  muted: true,
  playsInline: true,
})`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${colors.primary};
  object-fit: cover;
`

// Dayong: container & iframe styles for inline PDF viewer
export const PdfContainer = styled.div`
  width: 75%;
  height: clamp(60vh, 70vw, 85vh);
  border-radius: 10px;
  /* Dayong: remove borders/background so PDF can touch container bounds */
  border: none;
  overflow: hidden;
  background: transparent;

  @media ${mediaSize.phone} {
    width: 100%;
    height: 70vh;
  }
`

export const PdfFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  /* Dayong: rely on PDF page background to avoid surrounding band */
  background: transparent;
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
