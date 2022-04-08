import React from 'react'

import { render, cleanup } from '@testing-library/react'

import Card from './Card'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Card$/,
})

const componentProps = {
  id: 'unique_id',
  children: <span data-testid="banner_span">Im a span</span>,
  className: 'custom_class',
}

afterEach(cleanup)

describe('<Card />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Card {...componentProps} />)

    const card = queryByTestId(componentProps.id)

    expect(card).toBeTruthy()
  })

  test('should render children correctly', () => {
    const { queryByTestId } = render(<Card {...componentProps} />)

    expect(queryByTestId(componentProps.id).children).toHaveLength(1)

    expect(queryByTestId('banner_span')).toBeTruthy()

    expect(queryByTestId('banner_span').textContent).toEqual('Im a span')
  })

  test('should render class correctly', () => {
    const { queryByTestId, rerender } = render(<Card {...componentProps} />)

    const card = queryByTestId(componentProps.id)

    expect(card.className).toContain('custom_class')

    rerender(<Card {...componentProps} className={null} />)

    expect(card.className).not.toContain('custom_class')
  })
})
