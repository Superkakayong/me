//Librairies
import React from 'react'
import { useNavigate } from 'react-router-dom'

//Styles
import { SkillsContainer, SkillsText, Img, Skills } from './HardSkills.style'

//Images
import FichiersMo from '/assets/fichiers-mo.png'
import FichiersGr from '/assets/fichiers-gr.png'
import FichiersUx from '/assets/fichiers-ux.png'
import FichiersV from '/assets/fichiers-v.png'
import Fichiers3d from '/assets/fichiers-3d.png'

export const HardSkills = () => {
  const navigate = useNavigate()

  const handleClickMotionDesign = () => {
    navigate('/projects?filter=MIXED REALITY')
  }

  const handleClickGraphicDesign = () => {
    navigate('/projects?filter=GD')
  }

  const handleClickUXUI = () => {
    navigate('/projects?filter=UXUI')
  }

  const handleClickVideoEditing = () => {
    navigate('/projects?filter=VE')
  }

  const handleClick3D = () => {
    navigate('/projects?filter=3D')
  }

  return (
    <SkillsContainer>
      <Skills>
        <Img
          loading='lazy'
          src={FichiersMo}
          alt='Logo compétence'
          onClick={handleClickMotionDesign}
        />
        <SkillsText>MIXED REALITY</SkillsText>
      </Skills>
      <Skills>
        <Img
          loading='lazy'
          src={FichiersGr}
          alt='Logo compétence'
          onClick={handleClickGraphicDesign}
        />
        <SkillsText>GRAPHIC DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img
          loading='lazy'
          src={FichiersUx}
          alt='Logo compétence'
          onClick={handleClickUXUI}
        />
        <SkillsText>UX UI DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img
          loading='lazy'
          src={FichiersV}
          alt='Logo compétence'
          onClick={handleClickVideoEditing}
        />
        <SkillsText>VIDEO EDITING</SkillsText>
      </Skills>
      <Skills>
        <Img
          loading='lazy'
          src={Fichiers3d}
          alt='Logo compétence'
          onClick={handleClick3D}
        />
        <SkillsText>3D</SkillsText>
      </Skills>
    </SkillsContainer>
  )
}
