import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expectTypeOf } from 'vitest'
import { Toast } from './Toast'
import { ToastProps } from './Toast'

describe('Toast', () => {
  it('toast should be a function', () => {
    expectTypeOf(Toast).toBeFunction()
  })

  it('toast props types are all good', () => {
    const props: ToastProps = {
      type: 'success',
      message: 'Hello',
      active: true,
      closeToast: () => {
        console.log(`It's a toast!`)
      },
    }
    expect(typeof props.type).toBe('string')
    expect(typeof props.message).toBe('string')
    expect(typeof props.active).toBe('boolean')
    expect(typeof props.closeToast).toBe('function')
  })

  it('should display a toast with a text inside', () => {
    render(
      <Toast
        type={'success'}
        message={'Hello'}
        active={true}
        closeToast={() => {
          console.log(`It's a toast!`)
        }}
      />
    )
    const toast = screen.getByText('Hello')
    expect(toast).toBeInTheDocument()
  })

  it('render the right tag', () => {
    render(
      <Toast
        type={'success'}
        message={'Hello'}
        active={true}
        closeToast={() => {
          console.log(`It's a toast!`)
        }}
      />
    )
    const toast = screen.getByText('Hello')
    expect(toast.tagName).toBe('P')
  })
})
