//Librairies
import React, { FC } from 'react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'

//Styles
import {
  Container,
  ImgContainer,
  InfoContainer,
  ProjectTitle,
  ProjectTitleContainer,
  BottomContainer,
  TagContainer,
  Img,
} from './Project.style'

//Components
import { Tag } from '../Tag/Tag'

export type ProjectProps = {
  title: string
  imgPath: string
  mainsTag: Array<string>
  secondsTags: Array<string>
  id: number
}

export const Project: FC<ProjectProps> = ({ title, imgPath, mainsTag, id }) => {
  return (
    <Link
      data-testid='click-test'
      data-cursor
      style={{ height: '100%' }}
      to={'/one-project/' + id}
    >
      <Container>
        <ImgContainer>
          <Img loading='lazy' src={imgPath} />
        </ImgContainer>
        <InfoContainer>
          <ProjectTitleContainer>
            <ProjectTitle>{title}</ProjectTitle>
          </ProjectTitleContainer>
          <BottomContainer>
            <TagContainer>
              {mainsTag.map((tag) => (
                <Tag key={uuid()} text={tag} size='s' main={true} />
              ))}
            </TagContainer>
          </BottomContainer>
        </InfoContainer>
      </Container>
    </Link>
  )
}
