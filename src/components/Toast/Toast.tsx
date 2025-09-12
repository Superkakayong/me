//Librairies
import React, { FC } from 'react'
import { motion } from 'framer-motion'

//Styles
import { ToastContainer, Message, TitleType } from './Toast.style'

//Icons
import { FaWindowClose } from 'react-icons/fa'

//Variables
import { colors } from '../../config/variables'

export type ToastProps = {
  type: 'success' | 'erreur'
  message: string
  active: boolean
  closeToast: () => void
}

export const Toast: FC<ToastProps> = ({
  type,
  message,
  active,
  closeToast,
}) => {
  const variants = {
    open: { opacity: 1, y: '2%', x: '-50%' },
    closed: { opacity: 0, y: '-10%', x: '-50%' },
  }

  return (
    <ToastContainer
      type={type}
      as={motion.div}
      variants={variants}
      animate={active ? 'open' : 'closed'}
    >
      <TitleType type={type}>{type}</TitleType>
      <Message type={type}>{message}</Message>
      <FaWindowClose
        color={type === 'success' ? colors.success : colors.error}
        style={{
          position: 'absolute',
          top: '8%',
          right: '2%',
          cursor: 'pointer',
        }}
        fontSize={'1.5rem'}
        onClick={closeToast}
        data-cursor
      />
    </ToastContainer>
  )
}
