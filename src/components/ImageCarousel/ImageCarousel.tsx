import React, { useState, useCallback, useRef, useEffect } from 'react'
import { CarouselContainer, ImgContainer, NavButton, Overlay, LightboxImg, CloseButton, LightboxNavButton } from './ImageCarousel.style'

type Props = {
  images: string[]
  alt?: string
}

export const ImageCarousel: React.FC<Props> = ({ images, alt = 'carousel image' }) => {
  const [index, setIndex] = useState(0)
  // Dayong: isFading indicates we are in fade-out -> swap -> fade-in sequence
  const [isFading, setIsFading] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const animDuration = 200 // Dayong: animation duration in ms

  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Lock body scroll when lightbox is open
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (lightboxOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      // Dayong: focus the close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 0)
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [lightboxOpen])

  const changeIndex = useCallback(
    (target: number) => {
      if (isFading || target === index) return
      setIsFading(true)

      const t = window.setTimeout(() => {
        setIndex(target)
        // tiny delay to allow DOM update before fade-in
        window.setTimeout(() => setIsFading(false), 20)
      }, animDuration)

      timeoutRef.current = t
    },
    [isFading, index, animDuration]
  )

  const prev = useCallback(() => {
    changeIndex((index - 1 + images.length) % images.length)
  }, [changeIndex, index, images.length])

  const next = useCallback(() => {
    changeIndex((index + 1) % images.length)
  }, [changeIndex, index, images.length])

  // Dayong: keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  // Dayong: close on ESC when lightbox is open (must be after prev/next are declared)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, prev, next])

  // Dayong: touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const onTouchEnd = () => {
    const delta = touchDeltaX.current
    const threshold = 50 // px
    if (Math.abs(delta) > threshold) {
      if (delta > 0) {
        prev()
      } else {
        next()
      }
    }
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  if (!images || images.length === 0) return null

  return (
    <>
      <CarouselContainer aria-roledescription="image carousel">
      <NavButton onClick={prev} aria-label="Previous image" disabled={isFading}>
        ◀
      </NavButton>
      <ImgContainer onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={isFading ? 'fading' : ''}>
        <img src={images[index]} alt={`${alt} ${index + 1}`} onClick={() => setLightboxOpen(true)} style={{cursor: 'zoom-in'}} />
      </ImgContainer>
      <NavButton onClick={next} aria-label="Next image" disabled={isFading}>
        ▶
      </NavButton>
      </CarouselContainer>
      {lightboxOpen && (
        <Overlay role="dialog" aria-modal="true" onClick={() => setLightboxOpen(false)}>
          <CloseButton ref={closeButtonRef} onClick={() => setLightboxOpen(false)}>Close</CloseButton>
          <LightboxNavButton className="left" onClick={(e) => { e.stopPropagation(); prev(); }}>&lt;</LightboxNavButton>
          <LightboxNavButton className="right" onClick={(e) => { e.stopPropagation(); next(); }}>&gt;</LightboxNavButton>
          <LightboxImg src={images[index]} alt={`Full ${alt} ${index + 1}`} onClick={(e) => e.stopPropagation()} />
        </Overlay>
      )}
    </>
  )
}

export default ImageCarousel
