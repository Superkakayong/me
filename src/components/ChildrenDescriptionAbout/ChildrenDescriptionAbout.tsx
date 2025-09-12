//Librairies
import React, { FC } from 'react'

//Styles
import { Description } from './ChildrenDescriptionAbout.style'

type ChildrenDescriptionAboutProps = {
  children: string
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

export const ChildrenDescriptionAbout: FC<ChildrenDescriptionAboutProps> = ({
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
