//Librairies
import React from 'react'

//Styles
import {
  NotFoundContainer,
  TextContainer,
  NotFoundText,
} from '../styles/pages/NotFound.style'

//Components
import { StickersNotFound } from '../components/StickersNotFound/StickersNotFound'

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <TextContainer>
        <NotFoundText>OH.</NotFoundText>
        <NotFoundText>THE PAGE</NotFoundText>
        <NotFoundText>N{`'`}DOES NOT EXIST</NotFoundText>
        <StickersNotFound />
      </TextContainer>
    </NotFoundContainer>
  )
}
