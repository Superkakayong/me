//Librairies
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

//Pages
import { Home } from '../../pages/Home'
import { About } from '../../pages/About'
import { Projects } from '../../pages/Projects'
import { OneProject } from '../../pages/OneProject'
import { Contact } from '../../pages/Contact'
import { NotFound } from '../../pages/NotFound'

export const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path={'/'} element={<Home />} key={location.pathname} />
        <Route path={'/about'} element={<About />} key={location.pathname} />
        <Route
          path={'/projects'}
          element={<Projects />}
          key={location.pathname}
        />
        <Route
          path={'/one-project/:id'}
          element={<OneProject />}
          key={location.pathname}
        />
        <Route
          path={'/contact'}
          element={<Contact />}
          key={location.pathname}
        />
        <Route path={'*'} element={<NotFound />} key={location.pathname} />
      </Routes>
    </AnimatePresence>
  )
}
