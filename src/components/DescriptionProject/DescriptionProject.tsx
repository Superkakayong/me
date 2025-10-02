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
import { Button } from '../Button/Button'

type DescriptionProjectProps = {
  side: 'left' | 'right'
  children: string
  title: string
  buttonText?: string
  buttonUrl?: string
}

export const DescriptionProject: FC<DescriptionProjectProps> = ({
  side,
  children,
  title,
  buttonText,
  buttonUrl,
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
        {buttonText && buttonUrl && (
          <div style={{ marginTop: '1rem' }}>
            <Button text={buttonText} href={buttonUrl} size='md' active={true} />
          </div>
        )}
      </DescriptionProjectContainer>
    </SideContainer>
  )
}
