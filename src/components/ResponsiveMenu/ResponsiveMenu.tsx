//Librairies
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//Styles
import { MenuResponsiveContainer, LinkContainer } from './ResponsiveMenu.style'

//Components
import { Button } from '../Button'

type ResponsiveMenuProps = {
  active: boolean
}

export const ResponsiveMenu: FC<ResponsiveMenuProps> = ({ active }) => {
  const variants = {
    open: { y: '0%', x: '100%' },
    closed: { y: '0%', x: '-100%' },
  }

  return (
    <MenuResponsiveContainer
      as={motion.div}
      variants={variants}
      animate={active ? 'open' : 'closed'}
      transition={{
        ease: 'anticipate',
        duration: 0.8,
      }}
    >
      <LinkContainer>
        <Link to='/'>
          <Button size={'md'} text={'HOME'} active={true} />
        </Link>
        <Link to='/about'>
          <Button size={'md'} text={'ABOUT'} active={true} />
        </Link>
        <Link to='/projects'>
          <Button size={'md'} text={'PROJECTS'} active={true} />
        </Link>
      </LinkContainer>
    </MenuResponsiveContainer>
  )
}
