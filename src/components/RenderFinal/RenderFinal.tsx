//Librairies
import React, { FC } from 'react'

//Styles
// Dayong: include PDF layout primitives for inline document rendering
import {
  RenduFinalContainer,
  Title,
  Img,
  ImgContainer,
  VideoContainer,
  Video,
  PdfContainer,
  PdfFrame,
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
  // Dayong: detect inline PDF mode for render final
  const isPdf = type === 'pdf'
  // Dayong: re-use provided url when no explicit href is supplied
  const actionHref = hrefButton ?? url
  return (
    <RenduFinalContainer>
      {showTitle && <Title>DEMONSTRATION</Title>}
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
      ) : isPdf ? (
        <PdfContainer>
          <PdfFrame
            src={`${url ?? ''}#zoom=page-fit`}
            title='Project PDF preview'
            loading='lazy'
          />
        </PdfContainer>
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
      {/* {isPdf && actionHref && (
        // Dayong: offer fallback button for opening the PDF in a new tab
        <Button
          style={{ marginTop: '1.5em' }}
          text={'OPEN PDF'}
          size={'md'}
          href={actionHref}
          active={true}
        />
      )} */}
    </RenduFinalContainer>
  )
}
