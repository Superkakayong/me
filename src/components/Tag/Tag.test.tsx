import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expectTypeOf } from 'vitest'
import { Tag } from './Tag'
import { TagProps } from './Tag'

describe('Tag', () => {
  it('tag should be a function', () => {
    expectTypeOf(Tag).toBeFunction()
  })

  it('tag props types are all good', () => {
    const props: TagProps = {
      text: 'MOTION DESIGN',
      size: 'md',
      style: { color: 'red' },
      main: true,
    }
    expect(typeof props.text).toBe('string')
    expect(typeof props.size).toBe('string')
    expect(typeof props.style).toBe('object')
    expect(typeof props.main).toBe('boolean')
  })

  it('should display a tag with text inside', () => {
    render(<Tag text='MOTION DESIGN' size='md' main={true} />)
    const button = screen.getByText('MOTION DESIGN')
    expect(button).toBeInTheDocument()
  })

  it('render the right tag', () => {
    render(<Tag text='MOTION DESIGN' size='md' main={true} />)
    const button = screen.getByText('MOTION DESIGN')
    expect(button.tagName).toBe('A')
  })
})
