//Librairies
import React, { FC } from 'react'

//Styles
import { Description } from './DescriptionAbout.style'

type DescriptionAboutProps = {
  children: string
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

export const DescriptionAbout: FC<DescriptionAboutProps> = ({
  children,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <Description
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Description>
  )
}
