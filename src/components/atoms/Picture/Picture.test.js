import React from 'react'

import { render, cleanup } from '@testing-library/react'

import Picture from './Picture'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Picture$/,
})

const componentProps = {
  id: 'test-id',
  src: 'https://picsum.photos/id/1033/400/400',
  altText: 'Image description',
}

afterEach(cleanup)

describe('<Picture />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Picture {...componentProps} />)

    const button = queryByTestId(componentProps.id)

    expect(button).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Picture {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })
})
