//Librairies
import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

//Styles
import {
  ContactContainer,
  ContactTitle,
  SplitContainer,
  LeftContainer,
  RightContainer,
  InputContainerInline,
  InputLeft,
  InputRight,
  SubmitContainer,
  Button,
} from '../styles/pages/Contact.style'

//Components
import { Input } from '../components/Input'
import { TextArea } from '../components/TextArea'
import { Stickers } from '../components/Stickers'
import { Toast } from '../components/Toast'

//Hooks
import { useToast } from '../hooks/useToast'

type useStateStatus = 'success' | 'erreur'

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { toggleToast, toast, closeToast } = useToast()
  const [status, setStatus] = useState<useStateStatus>('success')
  const [message, setMessage] = useState<string>('')
  const [clear, setClear] = useState<boolean>(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current === null) return
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_EMAIL,
        import.meta.env.VITE_TEMPLATE_EMAIL,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY_EMAIL
      )
      .then(
        (result) => {
          toggleToast()
          setStatus('success')
          setMessage(`Mail envoyer avec success. ${result.text}`)
          setClear(true)
        },
        (error) => {
          toggleToast()
          setStatus('erreur')
          setMessage(`Erreur lors de l'envoie du mail. ${error}`)
        }
      )
  }

  return (
    <ContactContainer>
      <ContactTitle>CONTACT</ContactTitle>
      <SplitContainer>
        <LeftContainer
          ref={formRef}
          onSubmit={(event) => {
            sendEmail(event)
          }}
        >
          <InputContainerInline>
            <InputLeft>
              <Input
                clear={clear}
                type={'text'}
                placeholder={'NOM'}
                name={'nom'}
                autocomplete={false}
              />
            </InputLeft>
            <InputRight>
              <Input
                clear={clear}
                type={'email'}
                placeholder={'EMAIL'}
                name={'email'}
                autocomplete={false}
              />
            </InputRight>
          </InputContainerInline>
          <InputContainerInline>
            <InputLeft>
              <Input
                clear={clear}
                type={'text'}
                placeholder={'OBJET'}
                name={'objet'}
                autocomplete={false}
              />
            </InputLeft>
            <InputRight>
              <Input
                clear={clear}
                type={'text'}
                placeholder={'TELEPHONE'}
                name={'telephone'}
                autocomplete={false}
              />
            </InputRight>
          </InputContainerInline>
          <TextArea placeholder={'MESSAGE'} name={'message'} clear={clear} />
          <SubmitContainer>
            <Button>ENVOYER</Button>
          </SubmitContainer>
        </LeftContainer>
        <RightContainer>
          <Stickers />
        </RightContainer>
      </SplitContainer>
      <Toast
        type={status}
        message={message}
        active={toast}
        closeToast={closeToast}
      />
    </ContactContainer>
  )
}
