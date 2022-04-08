import React from 'react'

import { cleanup, render } from '@testing-library/react'

import Spacer from './Spacer'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Layout\/Spacer$/,
})

const componentProps = {
  id: 'spacer',
}

afterEach(cleanup)

describe('<Spacer />', () => {
  test('should render spacer correctly', () => {
    const { queryByTestId } = render(<Spacer {...componentProps} />)

    const spacer = queryByTestId(componentProps.id)

    expect(spacer).toBeTruthy()
  })

  test('should render horizontal spacer correctly', () => {
    const { queryByTestId } = render(<Spacer.Horizontal {...componentProps} />)

    const spacer = queryByTestId(componentProps.id)

    expect(spacer).toBeTruthy()
  })

  test('should render vertical spacer correctly', () => {
    const { queryByTestId } = render(<Spacer.Vertical {...componentProps} />)

    const spacer = queryByTestId(componentProps.id)

    expect(spacer).toBeTruthy()
  })
})
