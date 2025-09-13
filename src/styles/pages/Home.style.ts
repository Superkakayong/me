//Librairies
import styled from 'styled-components'

//Variaables
import {
  bigLetters,
  colors,
  fonts,
  fontSize,
  mediaSize,
} from '../../config/variables'

export const HomeContainer = styled.main`
  width: 85vw;
  height: 87vh;
  margin-top: 13vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${mediaSize.phone} {
    align-items: flex-start;
    height: 68vh;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media ${mediaSize.phone} {
    justify-content: flex-start;
    height: 35%;
  }
`

export const Text = styled.h1`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: ${bigLetters.lg};
  font-weight: normal;
  letter-spacing: 8px;
  line-height: 1.1;

  @media ${mediaSize.phone} {
    font-size: ${bigLetters.xxs};
  }
  @media ${mediaSize.under} {
    font-size: ${bigLetters.xxxs};
  }
`

// Dayong: Name: extend Text but allow different color/font/transform for the personal name
export const Name = styled(Text)`
  /* example overrides: change color and remove uppercase */
  color: ${colors.name};
  text-transform: none;
  /* if you want a different font, set it here:
     font-family: 'YourFontName', ${fonts.WorkSans};
  */
  letter-spacing: 4px;
`

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -3%);

  @media ${mediaSize.phone} {
    bottom: 2%;
  }
`

export const DrawingArrow = styled.img`
  position: absolute;
  width: 70vw;
  top: -22%;
  right: -35%;

  @media ${mediaSize.phone} {
    display: none;
  }
`

export const HardSkillsContainer = styled.div`
  width: 85vw;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8em;

  @media ${mediaSize.phone} {
    justify-content: flex-start;
    height: initial;
    margin-bottom: 2em;
    margin-top: 2em;
  }
`

export const HardSkillsTitle = styled.h3`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: ${fontSize.xxl};
  font-weight: normal;
  letter-spacing: 8px;
  margin-bottom: 2em;

  @media ${mediaSize.phone} {
    font-size: ${fontSize.xl};
    margin-bottom: 2em;
  }
`
