import React from 'react'

import { render, cleanup, fireEvent } from '@testing-library/react'

import Dropdown from './Dropdown'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Molecules\/Dropdown$/,
})

const componentProps = {
  id: 'dropdown_id',
  buttonContent: 'Toggle Dropdown',
  textList: [
    {
      content: <a href="#">Im a Link</a>,
    },
    { content: 'Item Two' },
  ],
}

afterEach(cleanup)

describe('<Dropdown />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Dropdown {...componentProps} />)

    expect(queryByTestId(componentProps.id)).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Dropdown {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should show button content correctly', () => {
    const { queryByTestId } = render(<Dropdown {...componentProps} />)

    expect(queryByTestId(`${componentProps.id}_toggle`).textContent).toEqual(
      componentProps.buttonContent
    )
  })

  test('should open dropdown', () => {
    const { queryByTestId } = render(<Dropdown {...componentProps} />)

    const button = queryByTestId(`${componentProps.id}_toggle`)

    expect(button.getAttribute('aria-expanded')).toEqual('false')
    expect(queryByTestId(`${componentProps.id}_list`).className).not.toContain(
      'is-open'
    )

    fireEvent.click(button)

    expect(button.getAttribute('aria-expanded')).toEqual('true')
    expect(queryByTestId(`${componentProps.id}_list`).className).toContain(
      'is-open'
    )
  })

  test('should show list correctly', () => {
    const { queryByTestId } = render(<Dropdown {...componentProps} />)

    expect(queryByTestId(`${componentProps.id}_list_0`)).toBeTruthy()
    expect(queryByTestId(`${componentProps.id}_list_0`).textContent).toEqual(
      'Im a Link'
    )

    expect(queryByTestId(`${componentProps.id}_list_1`)).toBeTruthy()
    expect(queryByTestId(`${componentProps.id}_list_1`).textContent).toEqual(
      componentProps.textList[1].content
    )
  })

  test('should not show list if disabled', () => {
    const { queryByTestId, rerender } = render(<Dropdown {...componentProps} />)

    expect(queryByTestId(`${componentProps.id}_list`)).toBeTruthy()

    rerender(<Dropdown {...componentProps} disabled={true} />)

    expect(queryByTestId(`${componentProps.id}_list`)).toBeFalsy()
  })
})
