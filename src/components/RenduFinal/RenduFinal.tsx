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
  showTitle?: boolean
}

export const RenduFinal: FC<RenduFinalProps> = ({
  url,
  type,
  hrefButton,
  showTitle,
}) => {
  return (
    <RenduFinalContainer>
      {showTitle && <Title>RENDU FINAL</Title>}
      {type === 'video' ? (
        <VideoContainer>
          <Video controls>
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
