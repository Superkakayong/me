//Librairies
import React, { FC } from 'react'
import uuid from 'react-uuid'

//Styles
import {
  ArrayContainer,
  RenduFinalContainer,
  Title,
  TwoCol,
  ThreeCol,
  Img,
  Video,
} from './RenduFinalArray.style'
import { YouTubePreview } from '../YouTubePreview/YouTubePreview'
import { InstagramPreview } from '../InstagramPreview/InstagramPreview'

type RenduFinalArrayProps = {
  renduFinalContent: Array<Array<string>> | undefined
  showTitle?: boolean
}

export const RenduFinalArray: FC<RenduFinalArrayProps> = ({
  renduFinalContent,
  showTitle,
}) => {
  let responsiveArray = {}

  if (window.matchMedia('(max-width: 576px)').matches) {
    responsiveArray = {}
  } else {
    responsiveArray = { gridArea: '1 / 2 / 2 / 4' }
  }

  return (
    <RenduFinalContainer>
      {showTitle && <Title>DEMOSTRATION</Title>}
      <ArrayContainer>
        {renduFinalContent?.map((content) => {
          if (content.length === 1) {
            const src = content[0]
            const isYouTube = /youtube.com|youtu.be/.test(src)
            const isInstagram = /instagram\.com\/p\//.test(src)
            const isVideo = /\.(mp4|webm|mov)$/i.test(src)

            return (
              <div key={uuid()} style={{ width: '100%' }}>
                {isYouTube ? (
                  <YouTubePreview url={src} lazy={false} />
                ) : isInstagram ? (
                  <InstagramPreview url={src} />
                ) : isVideo ? (
                  <Video controls>
                    <source src={src} />
                  </Video>
                ) : (
                  <Img key={uuid()} src={src} />
                )}
              </div>
            )
          }

          if (content.length === 2) {
            return (
              <TwoCol key={uuid()}>
                {content.map((img) => {
                  const isYouTube = /youtube.com|youtu.be/.test(img)
                  const isInstagram = /instagram\.com\/p\//.test(img)
                  const isVideo = /\.(mp4|webm|mov)$/i.test(img)
                  if (isYouTube) {
                    return <YouTubePreview key={uuid()} url={img} lazy={true} />
                  }
                  if (isInstagram) {
                    return <InstagramPreview key={uuid()} url={img} />
                  }
                  if (isVideo) {
                    return (
                      <Video key={uuid()} controls>
                        <source src={img} />
                      </Video>
                    )
                  }
                  return <Img key={uuid()} src={img} />
                })}
              </TwoCol>
            )
          } else if (content.length === 3) {
            return (
              <ThreeCol key={uuid()}>
                {content.map((img, index) => {
                  const isYouTube = /youtube.com|youtu.be/.test(img)
                  const isInstagram = /instagram\.com\/p\//.test(img)
                  const isVideo = /\.(mp4|webm|mov)$/i.test(img)
                  if (index === 1) {
                    return (
                      <div key={uuid()} style={responsiveArray}>
                        {isYouTube ? (
                          <YouTubePreview key={uuid()} url={img} lazy={true} />
                        ) : isInstagram ? (
                          <InstagramPreview key={uuid()} url={img} />
                        ) : isVideo ? (
                          <Video key={uuid()} controls>
                            <source src={img} />
                          </Video>
                        ) : (
                          <Img key={uuid()} src={img} />
                        )}
                      </div>
                    )
                  }

                  if (isYouTube) {
                    return <YouTubePreview key={uuid()} url={img} lazy={true} />
                  }
                  if (isInstagram) {
                    return <InstagramPreview key={uuid()} url={img} />
                  }
                  if (isVideo) {
                    return (
                      <Video key={uuid()} controls>
                        <source src={img} />
                      </Video>
                    )
                  }
                  return <Img key={uuid()} src={img} />
                })}
              </ThreeCol>
            )
          }
        })}
      </ArrayContainer>
    </RenduFinalContainer>
  )
}
