//Librairies
import React from 'react'

//Styles
import {
  HomeContainer,
  ArrowContainer,
  TextContainer,
  Text,
  DrawingArrow,
  HardSkillsContainer,
  HardSkillsTitle,
} from '../styles/pages/Home.style'

//Variables
import { fontSize, colors } from '../config/variables'

//Components
import { TypeText } from '../components/TypeText/TypeText'
import { HardSkills } from '../components/HardSkills/HardSkills'
import { PageTransition } from '../components/PageTransition/PageTransition'
import { Stickers } from '../components/Stickers/Stickers'

//Icons
import { FaArrowDown } from 'react-icons/fa'

//SVG
import drawingArrow from '/assets/fleche.svg'

export const Home = () => {
  return (
    <>
      <PageTransition>
        <HomeContainer>
          <Stickers />
          <DrawingArrow src={drawingArrow} />
          <TextContainer>
            <TypeText />
            <Text>DESIGNER</Text>
            <Text>+ART DIRECTOR</Text>
          </TextContainer>
          <ArrowContainer>
            <FaArrowDown
              size={fontSize.xl}
              color={colors.primary}
              className='arrowDown'
            />
            <FaArrowDown
              size={fontSize.xl}
              color={colors.primary}
              className='arrowDown'
            />
            <FaArrowDown
              size={fontSize.xl}
              color={colors.primary}
              className='arrowDown'
            />
          </ArrowContainer>
        </HomeContainer>
        <HardSkillsContainer>
          <HardSkillsTitle>HARD SKILLS</HardSkillsTitle>
          <HardSkills />
        </HardSkillsContainer>
      </PageTransition>
    </>
  )
}
