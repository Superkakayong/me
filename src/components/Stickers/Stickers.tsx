//Librairies
import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

//Styles
import { StickersContainer } from './Stickers.style'

export const Stickers = () => {
  const stickerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (stickerRef.current) {
        stickerRef.current.style.transform = `translate(${e.clientX / 20}px, ${
          e.clientY / 20
        }px)`
      }
    })
  }, [])

  return (
    <StickersContainer ref={stickerRef} location={location.pathname}>
      <img
        style={{ height: '21em', width: '48em' }}
        src='/assets/HELLO EYES STICKER.png'
      />
    </StickersContainer>
  )
}
