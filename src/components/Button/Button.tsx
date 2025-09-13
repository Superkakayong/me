//Librairies
import React, { FC } from 'react'

//Styles
import { GlobalButton } from './Button.style'

export type ButtonProps = {
  text: string
  href?: string
  size: 's' | 'md' | 'lg'
  style?: object
  active?: boolean
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = ({
  text,
  size,
  style,
  active,
  onclick,
}) => {
  return (
    <GlobalButton
      data-cursor
      style={style}
      size={size}
      onClick={onclick}
      active={active}
    >
      {text}
    </GlobalButton>
  )
}
