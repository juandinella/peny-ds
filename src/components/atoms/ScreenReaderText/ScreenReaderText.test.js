import React from 'react'

import { render, cleanup } from '@testing-library/react'

import ScreenReaderText from './ScreenReaderText'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/ScreenReaderText$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Go!',
}

afterEach(cleanup)

describe('<ScreenReaderText />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<ScreenReaderText {...componentProps} />)

    const text = queryByTestId(componentProps.id)

    expect(text).toBeTruthy()
  })

  test('should render content correctly', () => {
    const { queryByTestId } = render(<ScreenReaderText {...componentProps} />)

    const text = queryByTestId(componentProps.id)

    expect(text.textContent).toEqual(componentProps.children)
  })
})
