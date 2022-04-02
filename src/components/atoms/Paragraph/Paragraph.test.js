import React from 'react'

import { render, cleanup } from '@testing-library/react'

import Paragraph from './Paragraph'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Paragraph$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Go!',
}

afterEach(cleanup)

describe('<Paragraph />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Paragraph {...componentProps} />)

    const p = queryByTestId(componentProps.id)

    expect(p).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Paragraph {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should render content correctly', () => {
    const { queryByTestId } = render(<Paragraph {...componentProps} />)

    const p = queryByTestId(componentProps.id)

    expect(p.textContent).toEqual(componentProps.children)
  })
})
