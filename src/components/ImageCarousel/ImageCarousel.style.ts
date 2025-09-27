import styled from 'styled-components'
import { colors, mediaSize } from '../../config/variables'

/* Dayong: Responsive carousel styles — 推荐实现 */
export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  /* Dayong: flex-basis 使用 clamp 保证在不同宽度下合理伸缩
     280px 最小，45% 为优先，最多 720px */
  /* Dayong: broaden the default footprint so carousel shows larger on desktop */
  flex: 0 1 clamp(320px, 70%, 960px);
  min-width: 280px;   /* 防止在超窄布局下太小 */
  max-width: 90%;     /* 允许在页面上占据更多宽度 */

  @media ${mediaSize.phone} {
    flex: 0 1 100%;
    max-width: 100%;
    gap: 0.6rem;
  }
`

export const ImgContainer = styled.div`
  width: 100%;

  /* Dayong: Use portrait aspect ratio (width:height = 9:16) because images
    are mobile portrait photos. Aspect-ratio provides stable height based on
    the container width; we still cap max-height so it won't become too tall
    on large desktop screens. */
  aspect-ratio: 9 / 16;
  max-height: min(90vh, 900px);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;

  @media ${mediaSize.phone} {
    /* Dayong: on phone, keep the portrait feel but cap at 80vh so it fits
       nicely on most screens */
    max-height: 80vh;
  }

  /* Dayong: fade transition (200ms) for image opacity */
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* 保持 cover 效果，视觉一致 */
    transition: opacity 200ms ease, transform 200ms ease;
  }

  &.fading img {
    opacity: 0;
    transform: scale(0.995);
  }
`

export const NavButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${colors.primary};
  padding: 0.2rem 0.6rem;

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`

/* Dayong: Lightbox overlay styles */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 2rem;
`

export const LightboxImg = styled.img`
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 6px 30px rgba(0,0,0,0.6);
`

export const CloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.9);
  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  z-index: 1300;
  cursor: pointer;
  font-size: 1rem;
`

export const LightboxNavButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  color: white;
  padding: 0.6rem 0.9rem;
  border-radius: 50%;
  z-index: 1300;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover { background: rgba(255,255,255,0.12); }

  &.left { left: 1rem; }
  &.right { right: 1rem; }
`
