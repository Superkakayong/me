//Librairies
import React, { FC } from 'react'

//Styles
import { GlobalTag } from './Tag.style'

export type TagProps = {
  text: string
  size: 's' | 'md' | 'lg'
  style?: object
  main: boolean
}

export const Tag: FC<TagProps> = ({ text, size, style, main }) => {
  return (
    <GlobalTag style={style} size={size} href={'#'} main={main}>
      {text}
    </GlobalTag>
  )
}
