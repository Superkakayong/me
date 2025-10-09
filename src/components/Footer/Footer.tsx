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
            <Links data-cursor href='https://drive.google.com/file/d/1xmvgNuMxtOctdu7l8p7KPrD44JZ4Cu57/view?usp=share_link'>
              RESUME/CV
            </Links>
            {/* <Links data-cursor href='https://www.behance.net/antoinegvs'>
              BEHANCE
            </Links> */}
            <Links data-cursor href='https://www.linkedin.com/in/dayong-w-120a9b227/'>
              LINKEDIN
            </Links>
            <Links
              data-cursor
              href='https://www.instagram.com/superkakayong/'
            >
              INSTAGRAM
            </Links>
            {/* <Links data-cursor href='https://twitter.com/newwwwt_'>
              TWITTER
            </Links> */}
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
