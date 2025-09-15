//Librairies
import React, { FC } from 'react'

//Styles
import {
  RenduFinalContainer,
  Title,
  Img,
  ImgContainer,
  VideoContainer,
  Video,
} from './RenduFinal.style'

//Components
import { Button } from '../Button/Button'

type RenduFinalProps = {
  url: string | undefined
  type: string
  hrefButton: string | undefined
  videoPoster?: string | undefined // Dayong: optional poster image for video
  showTitle?: boolean
}

export const RenduFinal: FC<RenduFinalProps> = ({
  url,
  type,
  hrefButton,
  videoPoster,
  showTitle,
}) => {
  return (
    <RenduFinalContainer>
      {showTitle && <Title>DEMO</Title>}
      {type === 'video' ? (
        <VideoContainer>
          {/* Dayong: support an optional poster image for the video */}
          <Video controls poster={videoPoster}>
            <source src={url} />
          </Video>
        </VideoContainer>
      ) : (
        <ImgContainer>
          <Img loading='lazy' src={url} alt='Rendu final du projet' />
          <Button
            style={{ position: 'absolute', bottom: '4%', left: '4%' }}
            text={'VOIR LE PROJET'}
            size={'md'}
            href={hrefButton}
            active={true}
          />
        </ImgContainer>
      )}
    </RenduFinalContainer>
  )
}
