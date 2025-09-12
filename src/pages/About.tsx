//Librairies
import React, { useState } from 'react'

//Styles
import {
  AboutContainer,
  ExperienceContainer,
  GraphismeContainer,
  MainExperienceContainer,
  MainGraphismeContainer,
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
              <TitleAbout>LA CREATION & MOI</TitleAbout>
              <FaArrowLeft className='arrowLeft' color={colors.primary} />
            </TitleContainer>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterGraphisme}
              handleMouseLeave={handleMouseLeaveGraphisme}
            >
              Hey ! Je m’appelle Antoine Gervais, je suis un étudiant de 20 ans
              résident dans l’Oise. Je suis actuellement en deuxième année à
              Ynov Paris Campus en bachelor création et design à Nanterre.
              Depuis tout petit, j’adore la création, lorsque j’étais en
              primaire, j’aimais beaucoup dessiner et faire de la peinture,
              j’étais très manuel. C’est au collège que j’ai commencé à toucher
              à de la création digitale, dès le collège à travers des montages
              de vidéos sur YouTube. C’est à partir de là que j’ai développé une
              grande admiration pour le cinéma et notamment sur la
              postproduction, en particulier les effets spéciaux. C’est en
              m’intéressant au métier de vfx artist que je découvre le motion
              design. Au même moment, je participais au développement
              d’associations esport qui m’ont donné l’oppor-tunité de me lancer
              dans le motion design et le graphisme.
            </DescriptionAbout>
          </GraphismeContainer>
        </MainGraphismeContainer>
        <MainExperienceContainer>
          <ExperienceContainer>
            <TitleContainer active={hoverExperience}>
              <FaArrowRight className='arrowRight' color={colors.primary} />
              <TitleAbout>MON EXPERIENCE</TitleAbout>
              <FaArrowLeft className='arrowLeft' color={colors.primary} />
            </TitleContainer>
            <DescriptionAbout
              handleMouseEnter={handleMouseEnterExperience}
              handleMouseLeave={handleMouseLeaveExperience}
            >
              Mon expérience professionnelle débute dès ma première création. Ma
              première animation en motion design est un cv vidéo pour un coach
              et un manager esport. À partir de cette vidéo, j’ai décroché mes
              premiers clients, avec qui j’ai affiné ma technique et adapté mes
              créations à leurs demandes. En parallèle, j’ai rejoins InFuria
              Esport, une association compétitive esport, en tant que motion
              designer. Ma mission principale était de donner une plus value à
              leur communication à travers l’animation, même si j’ai eu
              l’opportunité de travailler sur des projets plus conséquents comme
              des projets de musiques et de web series. Après 2 ans chez
              InFuria, je suis rentré à Paris Ynov Campus pour développer mon
              sens créatif et mes qualités technique. Au même moment, je rejoins
              l’assoication BeHard Esport en tant que motion designer et
              graphiste. Quelques mois après, je deviens directeur artistique de
              l’association ou je dirige une petite équipe de 4 créatifs. Avec
              BeHard, j’ai eu l’occasion de développé plusieurs identités
              visuelles, plusieurs vidéos de communications (montage vidéo,
              motion design et production 3D) et une collection textile autour
              de l’équipe.
            </DescriptionAbout>
          </ExperienceContainer>
        </MainExperienceContainer>
        <Button text={'VOIR MON CV'} size={'md'} style={responsiveButton} />
      </AboutContainer>
    </PageTransition>
  )
}
