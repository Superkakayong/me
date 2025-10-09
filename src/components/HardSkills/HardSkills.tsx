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
    navigate('/projects?filter=HCI')
  }

  const handleClickGraphicDesign = () => {
    navigate('/projects?filter=3D Modeling')
  }

  const handleClickUXUI = () => {
    navigate('/projects?filter=Publications')
  }

  const handleClickVideoEditing = () => {
    navigate('/projects?filter=Social Media')
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
        <SkillsText>HCI</SkillsText>
      </Skills>
      <Skills>
        <Img
          loading='lazy'
          src={FichiersGr}
          alt='Logo compétence'
          onClick={handleClickGraphicDesign}
        />
        <SkillsText>3D Modeling</SkillsText>
      </Skills>
      <Skills>
        <Img
          loading='lazy'
          src={FichiersUx}
          alt='Logo compétence'
          onClick={handleClickUXUI}
        />
        <SkillsText>Publications</SkillsText>
      </Skills>
      <Skills>
        <Img
          loading='lazy'
          src={FichiersV}
          alt='Logo compétence'
          onClick={handleClickVideoEditing}
        />
        <SkillsText>Social Media</SkillsText>
      </Skills>
      {/* <Skills>
        <Img
          loading='lazy'
          src={Fichiers3d}
          alt='Logo compétence'
          onClick={handleClick3D}
        />
        <SkillsText>3D</SkillsText>
      </Skills> */}
    </SkillsContainer>
  )
}
