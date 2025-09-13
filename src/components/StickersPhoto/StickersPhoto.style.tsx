//Librairies
import styled from 'styled-components'

//Variables
import { colors, mediaSize } from '../../config/variables'

//Photo
import PhotoNewt from '/assets/photo-newt.jpg'

export const StickersContainer = styled.div`
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background-color: ${colors.primary};
  position: absolute;
  top: 24%;
  left: 10%;

  @media ${mediaSize.phone} {
    top: 13%;
    left: 28%;
  }
`

export const InnerCircle = styled.div`
  width: 7.5em;
  height: 7.5em;
  border-radius: 50%;
  background: url(${PhotoNewt});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`
