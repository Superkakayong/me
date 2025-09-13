//Librairies
import React, { FC, useState, useRef, useEffect } from 'react'

//Styles
import { TextAreaContainer, TextAreaElement } from './TextArea.style'

export type TextAreaProps = {
  placeholder: string
  name?: string
  id?: string
  clear?: boolean
}

export const TextArea: FC<TextAreaProps> = ({
  placeholder,
  name,
  id,
  clear,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!textAreaRef.current) return
    if (textAreaRef.current.value !== '') {
      setIsFocused(true)
      return
    }
    setIsFocused(false)
  }

  useEffect(() => {
    if (clear) {
      if (textAreaRef.current) {
        textAreaRef.current.value = ''
      }
    }
  }, [clear])

  return (
    <TextAreaContainer focused={isFocused} placeholder={placeholder}>
      <TextAreaElement
        data-testid='textarea'
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        id={id}
        ref={textAreaRef}
      />
    </TextAreaContainer>
  )
}
