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
} from './RenderFinal.style'
import { YouTubePreview } from '../YouTubePreview/YouTubePreview'

//Components
import { Button } from '../Button/Button'

type RenderFinalProps = {
  url: string | undefined
  type: string
  hrefButton: string | undefined
  videoPoster?: string | undefined // Dayong: optional poster image for video
  showTitle?: boolean
}

export const RenderFinal: FC<RenderFinalProps> = ({
  url,
  type,
  hrefButton,
  videoPoster,
  showTitle,
}) => {
  const isYouTube = url ? /youtube.com|youtu.be/.test(url) : false
  return (
    <RenduFinalContainer>
      {showTitle && <Title>DEMO</Title>}
      {type === 'video' ? (
        // if it's a YouTube url, render the lightweight preview instead of loading iframe immediately
        isYouTube ? (
          <VideoContainer>
            <YouTubePreview url={url as string} poster={videoPoster} />
          </VideoContainer>
        ) : (
          <VideoContainer>
            {/* Dayong: support an optional poster image for the video */}
            <Video controls poster={videoPoster}>
              <source src={url} />
            </Video>
          </VideoContainer>
        )
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
