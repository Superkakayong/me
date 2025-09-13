//Librairies
import React, { useRef, useEffect, useState } from 'react'

//Styles
import { CustomCursor } from './Cursor.style'

export const Cursor = () => {
  const [size, setSize] = useState<number>(60)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${
          e.clientX - window.innerWidth / 2
        }px, ${e.clientY}px, 0)`

      if (e.target && (e.target as HTMLElement).getAttribute('data-cursor')) {
        setSize(30)
      } else {
        setSize(60)
      }
    })
  }, [])

  return <CustomCursor ref={cursorRef} size={size} />
}
