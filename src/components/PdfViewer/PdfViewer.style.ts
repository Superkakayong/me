import styled from 'styled-components'
import { colors, fonts, fontSize, mediaSize } from '../../config/variables'

// Dayong: scrolling container for pdf.js rendered canvases
export const PdfScroll = styled.div`
  width: 100%;
  max-height: clamp(60vh, 75vw, 85vh);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: transparent;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    background: white;
  }

  @media ${mediaSize.phone} {
    max-height: 70vh;
    padding: 0 0.5rem;
  }
`

// Dayong: simple loading label for pdf render
export const LoadingText = styled.span`
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

// Dayong: message shown when PDF fails to load
export const ErrorText = styled.span`
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  color: ${colors.error};
  text-align: center;
`
