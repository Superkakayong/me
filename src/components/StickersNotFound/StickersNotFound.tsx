//Librairies
import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

//Styles
import { StickersContainer, InnerCircle, Text } from './StickersNotFound.style'

export const StickersNotFound = () => {
  const stickerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

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
    <StickersContainer ref={stickerRef} location={location.pathname}>
      <svg
        viewBox='0 0 100 100'
        width='105%'
        height='105%'
        className='stickers'
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
            ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR
          </textPath>
        </text>
      </svg>
      <InnerCircle>
        <Text>404</Text>
      </InnerCircle>
    </StickersContainer>
  )
}
