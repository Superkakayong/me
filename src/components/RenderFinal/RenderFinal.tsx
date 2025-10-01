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
  PdfContainer,
} from './RenderFinal.style'
import { YouTubePreview } from '../YouTubePreview/YouTubePreview'
import { PdfViewer } from '../PdfViewer/PdfViewer'

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
        // Dayong: render inline PDF with pdf.js viewer for desktop & mobile scrolling support
        <PdfContainer>
          {url ? (
            <PdfViewer file={url} />
          ) : (
            // Dayong: fallback button when no inline document source is provided
            <Button
              style={{ marginTop: '1.5em' }}
              text={'OPEN PDF'}
              size={'md'}
              href={actionHref}
              active={true}
            />
          )}
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
      {isPdf && actionHref && url && (
        // Dayong: surface explicit "open in new tab" control alongside inline viewer
        <Button
          style={{ marginTop: '1.5em' }}
          text={'DOWNLOAD PDF'}
          size={'md'}
          href={actionHref}
          active={true}
        />
      )}
    </RenduFinalContainer>
  )
}
