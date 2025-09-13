import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expectTypeOf } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Project } from './Project'
import { ProjectProps } from './Project'

describe('Tag', () => {
  it('project should be a function', () => {
    expectTypeOf(Project).toBeFunction()
  })

  it('project props types are all good', () => {
    const props: ProjectProps = {
      title: 'Test project',
      imgPath: 'test.png',
      mainsTag: ['MIXED REALITY', 'GRAPHIC DESIGN'],
      secondsTags: ['TYPOGRAPHY'],
      id: 1,
    }
    expect(typeof props.title).toBe('string')
    expect(typeof props.imgPath).toBe('string')
    expect(typeof props.mainsTag).toBe('object')
    expect(typeof props.secondsTags).toBe('object')
    expect(typeof props.id).toBe('number')
  })

  it('should display a project with information inside it', () => {
    render(
      <BrowserRouter>
        <Project
          title='Test project'
          imgPath='test.png'
          mainsTag={['MIXED REALITY', 'GRAPHIC DESIGN']}
          secondsTags={['TYPOGRAPHY']}
          id={1}
        />
      </BrowserRouter>
    )
    const project = screen.getByText('Test project')
    expect(project).toBeInTheDocument()
  })

  it('navigates to the correct project page when clicked', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Project
          title='Test project'
          imgPath='test.png'
          mainsTag={['MIXED REALITY', 'GRAPHIC DESIGN']}
          secondsTags={['TYPOGRAPHY']}
          id={1}
        />
      </BrowserRouter>
    )

    fireEvent.click(getByTestId('click-test'))
    expect(window.location.pathname).toBe('/one-project/1')
  })
})
