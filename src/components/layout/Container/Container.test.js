import React from 'react'

import { cleanup, render } from '@testing-library/react'

import Container from './Container'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Layout\/Container$/,
})

const componentProps = {
  id: 'container',
  children: <span data-testid="container_span">Im a span</span>,
  className: 'custom_class',
}

afterEach(cleanup)

describe('<Container />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Container {...componentProps} />)

    const container = queryByTestId(componentProps.id)

    expect(container).toBeTruthy()
  })

  test('should render children correctly', () => {
    const { queryByTestId } = render(<Container {...componentProps} />)

    expect(queryByTestId(componentProps.id).children).toHaveLength(1)

    expect(queryByTestId('container_span')).toBeTruthy()

    expect(queryByTestId('container_span').textContent).toEqual('Im a span')
  })

  test('should render class correctly', () => {
    const { queryByTestId, rerender } = render(
      <Container {...componentProps} />
    )

    const container = queryByTestId(componentProps.id)

    expect(container.className).toContain('custom_class')

    rerender(<Container {...componentProps} className={null} />)

    expect(container.className).not.toContain('custom_class')
  })
})
