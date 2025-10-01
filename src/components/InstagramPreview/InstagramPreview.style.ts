import styled from 'styled-components'
import { colors, mediaSize } from '../../config/variables'

// Dayong: Instagram 嵌入容器，保持响应式比例
export const InstaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const InstaFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 12px;
  background: ${colors.secondary};
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);

  @media ${mediaSize.phone} {
    aspect-ratio: 4 / 5;
  }
`

export const FallbackNotice = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px dashed ${colors.primary};
  color: ${colors.primary};
  text-align: center;
  font-size: 0.95rem;
`
