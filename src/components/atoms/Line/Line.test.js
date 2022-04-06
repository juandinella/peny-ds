import React from 'react'

import { render, cleanup } from '@testing-library/react'

import Line from './Line'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Line$/,
})

const componentProps = {
  id: 'unique_id',
}

afterEach(cleanup)

describe('<Line />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Line {...componentProps} />)

    const line = queryByTestId(componentProps.id)

    expect(line).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Line {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })
})
