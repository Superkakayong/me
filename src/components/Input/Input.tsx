//Librairies
import React, { FC, useState, useRef, useEffect } from 'react'

//Styles
import { InputContainer, InputElement } from './Input.style'

//Utils
import { isEmailValid, isPhoneNumberValid } from '../../utils/formVerif'

export type InputProps = {
  name?: string
  type: 'password' | 'text' | 'email'
  id?: string
  placeholder: string
  autocomplete?: boolean
  clear: boolean
}

export const Input: FC<InputProps> = ({
  name,
  type,
  id,
  placeholder,
  autocomplete,
  clear,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [valid, setValid] = useState<boolean>(true)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!inputRef.current) return
    if (inputRef.current.value !== '') {
      setIsFocused(true)
      return
    } else {
      setIsFocused(false)
    }
  }

  useEffect(() => {
    if (clear) {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }, [clear])

  const verifyContent = () => {
    if (!inputRef.current) return
    if (name === 'email') {
      if (!isEmailValid(inputRef.current.value)) {
        setValid(false)
      } else {
        setValid(true)
      }
    }
    if (name === 'telephone') {
      if (!isPhoneNumberValid(inputRef.current.value)) {
        setValid(false)
      } else {
        setValid(true)
      }
    }
  }

  return (
    <InputContainer focused={isFocused} placeholder={placeholder}>
      <InputElement
        data-testid='input'
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        type={type}
        id={id}
        ref={inputRef}
        autoComplete={autocomplete ? 'on' : 'off'}
        required
        onInput={verifyContent}
        valid={valid}
      />
    </InputContainer>
  )
}
