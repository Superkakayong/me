import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expectTypeOf } from 'vitest'
import { TitleAbout } from './TitleAbout'
import { TitleAboutProps } from './TitleAbout'

describe('TitleAbout', () => {
  it('titleabout should be a function', () => {
    expectTypeOf(TitleAbout).toBeFunction()
  })

  it('button props types are all good', () => {
    const props: TitleAboutProps = {
      children: 'Welcome to my portfolio',
    }
    expect(typeof props.children).toBe('string')
  })

  it('should display a title with the text inside', () => {
    render(<TitleAbout>Welcome to my portfolio</TitleAbout>)
    const titleAbout = screen.getByText('Welcome to my portfolio')
    expect(titleAbout).toBeInTheDocument()
  })

  it('render the right tag', () => {
    render(<TitleAbout>Welcome to my portfolio</TitleAbout>)
    const titleAbout = screen.getByText('Welcome to my portfolio')
    expect(titleAbout.tagName).toBe('H4')
  })
})
