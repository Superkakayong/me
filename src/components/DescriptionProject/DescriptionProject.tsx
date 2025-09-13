//Librairies
import React, { FC, useState } from 'react'

//Styles
import {
  DescriptionProjectContainer,
  ContainerTitleDescription,
  SideContainer,
} from './DescriptionProject.style'

//Components
import { TitleAbout } from '../TitleAbout/TitleAbout'
import { ChildrenDescriptionAbout } from '../ChildrenDescriptionAbout/ChildrenDescriptionAbout'

//Variables
import { colors } from '../../config/variables'

//Icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type DescriptionProjectProps = {
  side: 'left' | 'right'
  children: string
  title: string
}

export const DescriptionProject: FC<DescriptionProjectProps> = ({
  side,
  children,
  title,
}) => {
  const [hover, isHover] = useState<boolean>(false)

  const handleMouseEnter = (): void => {
    isHover(true)
  }

  const handleMouseLeave = (): void => {
    isHover(false)
  }

  return (
    <SideContainer side={side}>
      <DescriptionProjectContainer>
        <ContainerTitleDescription active={hover}>
          <FaArrowRight className='arrowRight' color={colors.primary} />
          <TitleAbout>{title}</TitleAbout>
          <FaArrowLeft className='arrowLeft' color={colors.primary} />
        </ContainerTitleDescription>
        <ChildrenDescriptionAbout
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        >
          {children}
        </ChildrenDescriptionAbout>
      </DescriptionProjectContainer>
    </SideContainer>
  )
}
