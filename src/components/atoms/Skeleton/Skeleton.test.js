import React from 'react'

import { cleanup, render } from '@testing-library/react'

import Skeleton from './Skeleton'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Skeleton$/,
})

const componentProps = {
  id: 'skeleton-id',
  show: true,
  children: <div data-testid="children">Children</div>,
}

afterEach(cleanup)

describe('<Skeleton />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Skeleton {...componentProps} />)

    const skeleton = queryByTestId(componentProps.id)

    expect(skeleton).toBeTruthy()
  })

  test('should render only children', () => {
    const { queryByTestId } = render(
      <Skeleton {...componentProps} show={false} />
    )

    const skeleton = queryByTestId(componentProps.id)
    const children = queryByTestId('children')

    expect(skeleton).toBeFalsy()
    expect(children).toBeTruthy()
  })
})
