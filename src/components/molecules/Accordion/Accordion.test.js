import React from 'react'

import { cleanup, render, fireEvent } from '@testing-library/react'

import Accordion from './Accordion'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Molecules\/Accordion$/,
})

const textContent = 'Accordion content'

const componentProps = {
  title: 'Accordion Title',
  content: <span>{textContent}</span>,
  id: 'accordion_id',
}

afterEach(cleanup)

describe('<Accordion />', () => {
  test('should render accordion correctly', () => {
    const { queryByTestId } = render(<Accordion {...componentProps} />)

    expect(queryByTestId(componentProps.id)).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Accordion {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should show title correctly', () => {
    const { queryByTestId } = render(<Accordion {...componentProps} />)

    expect(queryByTestId(`${componentProps.id}_title`)).toBeTruthy()
  })

  test('should show content correctly', () => {
    const { queryByTestId } = render(<Accordion {...componentProps} />)

    const content = queryByTestId(`${componentProps.id}_content`)

    expect(content.firstChild).toBeTruthy()
    expect(content.firstChild.textContent).toEqual(textContent)
  })

  test('should open content correctly', () => {
    const { container, queryByTestId } = render(
      <Accordion {...componentProps} />
    )

    const button = queryByTestId(`${componentProps.id}_button`)

    expect(button.className).not.toContain('is-open')
    expect(
      container.querySelector('.accordion-content').getAttribute('aria-hidden')
    ).toEqual('true')

    fireEvent.click(button)

    expect(button.className).toContain('is-open')
    expect(
      container.querySelector('.accordion-content').getAttribute('aria-hidden')
    ).toEqual('false')
  })
})
