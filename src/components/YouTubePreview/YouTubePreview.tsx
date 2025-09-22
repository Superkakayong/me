import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'

const Thumb = styled.div<{ bg?: string; loaded?: boolean }>`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: filter 300ms ease, opacity 300ms ease, transform 300ms ease;
  ${props =>
    props.bg
      ? css`
          background-image: url(${props.bg});
        `
      : css`
          background-color: #111;
        `}

  /* blur while loading thumbnail */
  ${props =>
    props.loaded
      ? css`
          filter: none;
          opacity: 1;
        `
      : css`
          filter: blur(6px) saturate(0.9);
          opacity: 0.9;
        `}
`

const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(0, 0, 0, 0.55);
  border: none;
  color: white;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
    background: rgba(0, 0, 0, 0.7);
  }

  svg {
    display: block;
    margin-left: 4px;
  }
`

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`

const StyledIframe = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

function getYouTubeId(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com')) return u.searchParams.get('v')
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1)
  } catch (e) {
    return null
  }
  return null
}

type Props = {
  url: string
  poster?: string
  lazy?: boolean // whether to lazy-load the thumbnail (defaults to true)
}

export const YouTubePreview: React.FC<Props> = ({ url, poster, lazy = true }) => {
  const [playing, setPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(!lazy)
  const [thumbLoaded, setThumbLoaded] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const id = getYouTubeId(url)
  if (!id) return null

  const thumb = poster ? poster : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  useEffect(() => {
    if (!lazy) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            obs.disconnect()
          }
        })
      },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [lazy])

  useEffect(() => {
    if (!isVisible) return
    // preload thumbnail
    const img = new Image()
    img.src = thumb
    img.onload = () => setThumbLoaded(true)
  }, [isVisible, thumb])

  return (
    <>
      {!playing ? (
        <Thumb
          ref={ref}
          role='button'
          onClick={() => setPlaying(true)}
          bg={isVisible && thumbLoaded ? thumb : undefined}
          loaded={!!(isVisible && thumbLoaded)}
        >
          <PlayButton aria-label='Play video'>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M8 5v14l11-7L8 5z' fill='currentColor' />
            </svg>
          </PlayButton>
        </Thumb>
      ) : (
        <IframeWrapper>
          <StyledIframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='YouTube preview'
          />
        </IframeWrapper>
      )}
    </>
  )
}

export default YouTubePreview
