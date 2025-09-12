//Librairies
import React, { FC } from 'react'

//Styles
import { Title } from './TitleAbout.style'

export type TitleAboutProps = {
  children: string
}

export const TitleAbout: FC<TitleAboutProps> = ({ children }) => {
  return <Title>{children}</Title>
}
