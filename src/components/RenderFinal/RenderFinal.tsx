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
// Dayong: 引入 Instagram 预览组件以支持外部嵌入
import { InstagramPreview } from '../InstagramPreview/InstagramPreview'
import { PdfViewer } from '../PdfViewer/PdfViewer'

//Components
import { Button } from '../Button/Button'

type RenderFinalProps = {
  url: string | undefined
  type: string
  hrefButton: string | undefined
  videoPoster?: string | undefined // Dayong: optional poster image for video
  showTitle?: boolean
  documentButtonText?: string
}

export const RenderFinal: FC<RenderFinalProps> = ({
  url,
  type,
  hrefButton,
  videoPoster,
  showTitle,
  documentButtonText,
}) => {
  const isYouTube = url ? /youtube.com|youtu.be/.test(url) : false
  // Dayong: 简单识别 Instagram 分享链接
  const isInstagram = url ? /instagram\.com\/p\//.test(url) : false
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
        ) : isInstagram ? (
          <VideoContainer>
            <InstagramPreview url={url as string} />
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
              text={documentButtonText ?? 'Open Document'}
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
          text={documentButtonText ?? 'Download PDF'}
          size={'md'}
          href={actionHref}
          active={true}
        />
      )}
    </RenduFinalContainer>
  )
}
