//Librairies
import React, { useState } from 'react'

export const useToast = () => {
  const [toast, setToast] = useState<boolean>(false)

  const toggleToast = (): void => {
    setToast(true)

    setTimeout(() => {
      setToast(false)
    }, 4000)
  }

  const closeToast = (): void => {
    setToast(false)
  }

  return { toast, toggleToast, closeToast }
}
