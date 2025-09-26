//Librairies
import React, { useState } from 'react'

//Styles
import {
  AboutContainer,
  ExperienceContainer,
  GraphismeContainer,
  MainExperienceContainer,
  MainGraphismeContainer,
  MainUnProExperienceContainer,
  UnProExperienceContainer,
  TitleContainer,
} from '../styles/pages/About.style'

//Variables
import { colors } from '../config/variables'

//Icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

//Components
import { StickersPhoto } from '../components/StickersPhoto/StickersPhoto'
import { DescriptionAbout } from '../components/DescriptionAbout/DescriptionAbout'
import { TitleAbout } from '../components/TitleAbout/TitleAbout'
import { Button } from '../components/Button/Button'
import { PageTransition } from '../components/PageTransition/PageTransition'

export const About = () => {
  const [hoverGraphisme, isHoverGraphisme] = useState<boolean>(false)

  const handleMouseEnterGraphisme = (): void => {
    isHoverGraphisme(true)
  }

  const handleMouseLeaveGraphisme = (): void => {
    isHoverGraphisme(false)
  }

  const [hoverExperience, isHoverExperience] = useState<boolean>(false)

  const handleMouseEnterExperience = (): void => {
    isHoverExperience(true)
  }

  const handleMouseLeaveExperience = (): void => {
    isHoverExperience(false)
  }

  const [hoverUnProExperience, isHoverUnProExperience] = useState<boolean>(false)

  const handleMouseEnterUnProExperience = (): void => {
    isHoverUnProExperience(true)
  }

  const handleMouseLeaveUnProExperience = (): void => {
    isHoverUnProExperience(false)
  }

  let responsiveButton = {}

  if (window.matchMedia('(max-width: 576px)').matches) {
    responsiveButton = { marginTop: '1em' }
  } else {
    responsiveButton = { marginTop: '3em', marginBottom: '1em' }
  }

  return (
    <PageTransition>
      <AboutContainer>
        
        <MainGraphismeContainer>
          <StickersPhoto />
          <GraphismeContainer>
            <TitleContainer active={hoverGraphisme}>
              <FaArrowRight className='arrowRight' color={colors.primary} />
              <TitleAbout>WHO AM I?</TitleAbout>
              <FaArrowLeft className='arrowLeft' color={colors.primary} />
            </TitleContainer>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterGraphisme}
              handleMouseLeave={handleMouseLeaveGraphisme}
            >
              Yo what's up. My name is Dayong Wu, and I was born and raised in Dongguan, 
              a small but booming city 
              in southern China, right next to Hong Kong. I am a creative engineer, 
              designer, and content creator. 
            </DescriptionAbout>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterGraphisme}
              handleMouseLeave={handleMouseLeaveGraphisme}
            >
              Dayong Wu, or 吴大庸 in Chinese, means "universal harmony." 
              As I keep learning and using technology to solve real-world problems, I see this
              as my life purpose to utilize modern science to support people to flourish 
              and find the TAO along their paths.
            </DescriptionAbout>
          </GraphismeContainer>
        </MainGraphismeContainer>

        <MainExperienceContainer>
          <ExperienceContainer>
            <TitleContainer active={hoverExperience}>
              <FaArrowRight className='arrowRight' color={colors.primary} />
              <TitleAbout>PROFESSIONAL EXPERIENCE</TitleAbout>
              <FaArrowLeft className='arrowLeft' color={colors.primary} />
            </TitleContainer>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterExperience}
              handleMouseLeave={handleMouseLeaveExperience}
            >
              I got my Master's degree in Computer Science from Boston University and a Bachelor's degree
              in Digital Media Technology from Xiamen University, China. After graduated from BU, 
              I have been working at Fraunhofer USA for 2.5 years as a Computer Scientist. My experience
              spans Human-Computer Interaction (HCI), wearables, 3D Modeling, Mixed Reality, and Human-AI systems.
            </DescriptionAbout>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterExperience}
              handleMouseLeave={handleMouseLeaveExperience}
            >
              As the lead Augmented Reality (AR) developer at Fraunhofer, I led the design and development
              of RetrofitAR, an industrial-scale Augmented Reality application on Microsoft HoloLens2 
              to provide real-time and step-by-step virtual guidance for semi-skilled crews (e.g. house owners) 
              to install panel blocks in residential retrofits.
            </DescriptionAbout>
          </ExperienceContainer>
        </MainExperienceContainer>

        <MainUnProExperienceContainer>
          <UnProExperienceContainer>
            <TitleContainer active={hoverUnProExperience}>
              <FaArrowRight className='arrowRight' color={colors.primary} />
              <TitleAbout>"UNPROFESSIONAL" EXPERIENCE</TitleAbout>
              <FaArrowLeft className='arrowLeft' color={colors.primary} />
            </TitleContainer>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterUnProExperience}
              handleMouseLeave={handleMouseLeaveUnProExperience}
            >
              In parallel to my work, I am an educational social media creator with over 50K followers 
              across RedNote, TikTok, and WeChat. I focus on teaching practical English to Chinese 
              elderly learners and introducing Boston’s local culture. 
              Many of my followers tell me that while AI tools reduce language barriers, 
              they also make them feel less socially connected in the US. They value my content 
              because it provides not only instructions but also human warmth and 
              authentic connection—something AI cannot replace.
            </DescriptionAbout>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterUnProExperience}
              handleMouseLeave={handleMouseLeaveUnProExperience}
            >
              I am also a passionate soccer ⚽️ player. I played for my undergraduate school team and
              BU Soccer Club for a short time. I am the starting striker of Harvard Chinese Soccer Team
              and we won the championship of New England Cup in 2025!
            </DescriptionAbout>
          </UnProExperienceContainer>
        </MainUnProExperienceContainer>

        <Button text={'VOIR MON CV'} size={'md'} style={responsiveButton} />
      </AboutContainer>
    </PageTransition>
  )
}
