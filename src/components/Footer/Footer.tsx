//Librairies
import React from 'react'

//Styles
import {
  FooterContainer,
  Line,
  ContentContainer,
  GoTop,
  LinksContainer,
  Links,
  Credits,
} from './Footer.style'

//Variables
import { colors } from '../../config/variables'

export const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <FooterContainer>
        <Line />
        <ContentContainer>
          <GoTop data-cursor onClick={scrollTop}>
            GO TO TOP
          </GoTop>
          <LinksContainer>
            <Links data-cursor href='mailto:antoinegervais.motion@outlook.fr'>
              MAIL
            </Links>
            <Links data-cursor href='https://www.behance.net/antoinegvs'>
              BEHANCE
            </Links>
            <Links data-cursor href='https://www.instagram.com/newwwwt_/'>
              INSTRAGRAM
            </Links>
            <Links
              data-cursor
              href='https://www.linkedin.com/in/antoine-gervais-2475911aa/'
            >
              LINKEDIN
            </Links>
            <Links data-cursor href='https://twitter.com/newwwwt_'>
              TWITTER
            </Links>
          </LinksContainer>
        </ContentContainer>
      </FooterContainer>
      <Credits>
        {'MADE WITH ❤️ & 🔥 BY'}
        <a
          style={{ color: colors.primary, marginLeft: '0.5em' }}
          href='https://github.com/Sakoutecher'
        >
          DAYONG WU
        </a>
      </Credits>
    </>
  )
}
