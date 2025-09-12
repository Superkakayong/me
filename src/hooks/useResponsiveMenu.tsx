//Librairies
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useResponsiveMenu = () => {
  const [active, setActive] = useState<boolean>(false)
  const location = useLocation()

  const toggleMenu = (): void => {
    setActive(!active)
  }

  useEffect(() => {
    if (active) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'initial'
    }
  }, [])

  useEffect(() => {
    if (active) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'initial'
    }
  }, [active])

  useEffect(() => {
    setActive(false)
  }, [location.pathname])

  return { active, toggleMenu }
}
