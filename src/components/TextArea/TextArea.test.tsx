import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expectTypeOf } from 'vitest'
import { TextArea } from './TextArea'
import { TextAreaProps } from './TextArea'

describe('TextArea', () => {
  it('textarea should be a function', () => {
    expectTypeOf(TextArea).toBeFunction()
  })

  it('input props types are all good', () => {
    const props: TextAreaProps = {
      placeholder: 'PASSWORD',
      id: 'input-password',
      name: 'password',
    }
    expect(typeof props.placeholder).toBe('string')
    expect(typeof props.id).toBe('string')
    expect(typeof props.name).toBe('string')
  })

  it('should display an textarea with a placeholder inside', () => {
    render(<TextArea placeholder='FIRSTNAME' />)
    const textArea = screen.getByTestId('textarea')
    expect(textArea).toBeInTheDocument()
  })

  it('render the right tag', () => {
    render(<TextArea placeholder='FIRSTNAME' />)
    const textArea = screen.getByTestId('textarea')
    expect(textArea.tagName).toBe('TEXTAREA')
  })
})
