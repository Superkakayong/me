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
} from './RenduFinalArray.style'

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
      {showTitle && <Title>DEMO</Title>}
      <ArrayContainer>
        {renduFinalContent?.map((content) => {
          if (content.length === 2) {
            return (
              <TwoCol key={uuid()}>
                {content.map((img) => {
                  return <Img key={uuid()} src={img} />
                })}
              </TwoCol>
            )
          } else if (content.length === 3) {
            return (
              <ThreeCol key={uuid()}>
                {content.map((img, index) => {
                  if (index === 1) {
                    return (
                      <div key={uuid()} style={responsiveArray}>
                        <Img key={uuid()} src={img} />
                      </div>
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
