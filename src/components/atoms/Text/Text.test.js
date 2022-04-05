import React from 'react'

import { render, cleanup } from '@testing-library/react'

import Text from './Text'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Text$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Go!',
}

afterEach(cleanup)

describe('<Text />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Text {...componentProps} />)

    const p = queryByTestId(componentProps.id)

    expect(p).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Text {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should render content correctly', () => {
    const { queryByTestId } = render(<Text {...componentProps} />)

    const p = queryByTestId(componentProps.id)

    expect(p.textContent).toEqual(componentProps.children)
  })

  test('should render type correctly', () => {
    const { container } = render(<Text {...componentProps} type="h4" />)

    const h4 = container.querySelector('h4')

    expect(h4).toBeTruthy()
  })
})
