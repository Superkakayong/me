//Librairies
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import uuid from 'react-uuid'

//Styles
import {
  ImgProjectContainer,
  ImgProject,
  OneProjectContainer,
  TitleContainer,
  Title,
  CreditsContainer,
  DescriptionContainer,
  NavRoute,
  NavText,
} from '../styles/pages/OneProject.style'

//Components
import { Credits } from '../components/Credits/Credits'
import { DescriptionProject } from '../components/DescriptionProject/DescriptionProject'
import { RenderFinal } from '../components/RenderFinal/RenderFinal'
import { PageTransition } from '../components/PageTransition/PageTransition'
import { RenduFinalArray } from '../components/RenduFinalArray/RenduFinalArray'

//Data
import { projects } from '../data/projects'

export const OneProject = () => {
  const location = useLocation()
  const index = Number(location.pathname.replace('/one-project/', ''))

  const renderRenduFinal = () => {
    if (projects[index].renderFinal && projects[index].renderFinalArray) {
      return (
        <>
          <RenderFinal
            url={
              projects[index].typeRenderFinal === 'video'
                ? projects[index].videoPathRenderFinal
                : projects[index].imagePathRenderFinal
            }
            type={projects[index].typeRenderFinal}
            hrefButton={projects[index].hrefButtonRenderFinal}
            videoPoster={projects[index].videoPoster}
            showTitle={true}
          />{' '}
          <RenduFinalArray
            renduFinalContent={projects[index].renderFinalContent}
            showTitle={false}
          />
        </>
      )
    } else if (projects[index].renderFinal && !projects[index].renderFinalArray) {
      return (
        <RenderFinal
          url={
            projects[index].typeRenderFinal === 'video'
              ? projects[index].videoPathRenderFinal
              : projects[index].imagePathRenderFinal
          }
          type={projects[index].typeRenderFinal}
          hrefButton={projects[index].hrefButtonRenderFinal}
            videoPoster={projects[index].videoPoster}
          showTitle={true}
        />
      )
    } else if (!projects[index].renderFinal && projects[index].renderFinalArray) {
      return (
        <RenduFinalArray
          renduFinalContent={projects[index].renderFinalContent}
          showTitle={true}
        />
      )
    }
  }

  return (
    <>
      <PageTransition
        style={{
          display: 'flex',
          justifyContente: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <NavRoute>
          <NavText>PROJETS</NavText>
          <NavText>{'>'}</NavText>
          <Link to='/projects'>
            <NavText data-cursor>{projects[index].mainsTag[0]}</NavText>
          </Link>
          <NavText>{'>'}</NavText>
          <NavText style={{ textDecoration: 'underline' }}>
            {projects[index].title}
          </NavText>
        </NavRoute>
        <ImgProjectContainer>
          <ImgProject
            loading='lazy'
            src={projects[index].imgAbout}
            alt='Photo projet'
          />
        </ImgProjectContainer>
        <OneProjectContainer>
          <TitleContainer>
            <Title>{projects[index].title}</Title>
          </TitleContainer>
          <CreditsContainer>
            <Credits text={projects[index].client} />
            <Credits text={projects[index].role} />
            <Credits text={projects[index].credits} />
          </CreditsContainer>
          <DescriptionContainer>
            {projects[index].description.map(({ title, desc, side }) => (
              <DescriptionProject key={uuid()} title={title} side={side}>
                {desc}
              </DescriptionProject>
            ))}
          </DescriptionContainer>
          {renderRenduFinal()}
        </OneProjectContainer>
      </PageTransition>
    </>
  )
}
