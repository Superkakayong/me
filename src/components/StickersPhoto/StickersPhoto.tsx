//Librairies
import React, { useRef, useEffect } from 'react'

//Styles
import { StickersContainer, InnerCircle } from './StickersPhoto.style'

export const StickersPhoto = () => {
  const stickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (stickerRef.current) {
        stickerRef.current.style.transform = `translate(${e.clientX / 40}px, ${
          e.clientY / 40
        }px)`
      }
    })
  }, [])

  return (
    <StickersContainer ref={stickerRef}>
      <svg
        viewBox='0 0 100 100'
        width='105%'
        height='105%'
        className='stickers-photo'
      >
        <defs>
          <path
            id='circle'
            d='
              M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0'
          />
        </defs>
        <text fontSize='6'>
          <textPath xlinkHref='#circle'>
            HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
          </textPath>
        </text>
      </svg>
      <InnerCircle></InnerCircle>
    </StickersContainer>
  )
}
