//Librairies
import React from 'react'
import styled from 'styled-components'

//Components
import { Cursor } from './components/Cursor/Cursor'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes'

export const App = () => {
  const isMobile = () => {
    return window.innerWidth <= 576
  }

  return (
    <MainContainer>
      {isMobile() ? null : <Cursor />}
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url('/assets/Background_Portfolio.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`
