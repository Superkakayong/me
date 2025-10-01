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
  href,
  size,
  style,
  active,
  onclick,
}) => {
  // Dayong: support href by opening target in a new tab when no explicit handler is provided
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onclick) {
      onclick(e)
      return
    }
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <GlobalButton
      data-cursor
      style={style}
      size={size}
      onClick={handleClick}
      active={active}
    >
      {text}
    </GlobalButton>
  )
}
