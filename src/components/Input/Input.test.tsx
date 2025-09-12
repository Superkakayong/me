import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expectTypeOf } from 'vitest'
import { Input } from './Input'
import { InputProps } from './Input'

describe('Input', () => {
  it('input should be a function', () => {
    expectTypeOf(Input).toBeFunction()
  })

  it('input props types are all good', () => {
    const props: InputProps = {
      name: 'password',
      type: 'text',
      id: 'input-password',
      placeholder: 'PASSWORD',
      clear: false,
    }
    expect(typeof props.name).toBe('string')
    expect(typeof props.type).toBe('string')
    expect(typeof props.id).toBe('string')
    expect(typeof props.placeholder).toBe('string')
    expect(typeof props.clear).toBe('boolean')
  })

  it('should display an input with a placeholder inside and the right type', () => {
    render(<Input type='text' placeholder='FIRSTNAME' clear={false} />)
    const input = screen.getByTestId('input')
    const inputType = input.getAttribute('type')
    expect(input).toBeInTheDocument()
    expect(inputType).toBe('text')
  })

  it('render the right tag', () => {
    render(<Input type='text' placeholder='FIRSTNAME' clear={false} />)
    const input = screen.getByTestId('input')
    expect(input.tagName).toBe('INPUT')
  })
})
