//Librairies
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

//Variables
import { colors, fonts, bigLetters } from '../../config/variables'

export const TypeText = () => {
  let size = ''

  if (window.matchMedia('(max-width: 400px)').matches) {
    size = bigLetters.xxxs
  } else if (window.matchMedia('(max-width: 576px)').matches) {
    size = bigLetters.xxs
  } else {
    size = bigLetters.lg
  }

  return (
    <TypeAnimation
      sequence={['MOTION', 2000, 'GRAPHIC', 2000, 'UX UI', 2000]}
      wrapper='h1'
      repeat={Infinity}
      speed={1}
      deletionSpeed={1}
      style={{
        fontFamily: fonts.OTR,
        color: colors.primary,
        textTransform: 'uppercase',
        fontSize: size,
        fontWeight: 'normal',
        letterSpacing: '8px',
        lineHeight: '1.1',
      }}
    />
  )
}
