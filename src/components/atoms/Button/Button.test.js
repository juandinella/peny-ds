import React from 'react'

import { render, fireEvent, cleanup } from '@testing-library/react'

import Button from './Button'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Button$/,
})

const componentProps = {
  onClick: jest.fn(),
  id: 'unique_id',
  children: <span data-testid="children">{'Go!'}</span>,
  type: 'reset',
}

afterEach(cleanup)
beforeEach(() => {
  componentProps.onClick.mockClear()
})

describe('<Button />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Button {...componentProps} />)

    const button = queryByTestId(componentProps.id)

    expect(button).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Button {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should render children correctly', () => {
    const { queryByTestId } = render(<Button {...componentProps} />)

    const children = queryByTestId('children')

    expect(children).toBeTruthy()
  })

  test('should render content correctly', () => {
    const { queryByTestId } = render(<Button {...componentProps} />)

    const button = queryByTestId(componentProps.id)

    expect(button.textContent).toEqual('Go!')
  })

  test('should ignore function if disabled', () => {
    const { container, rerender } = render(
      <Button {...componentProps} disabled />
    )

    fireEvent.click(container.firstChild)

    expect(componentProps.onClick).toHaveBeenCalledTimes(0)

    rerender(<Button {...componentProps} />)

    fireEvent.click(container.firstChild)

    expect(componentProps.onClick).toHaveBeenCalledTimes(1)
  })
  test('should call function on click', () => {
    const { container } = render(<Button {...componentProps} />)

    fireEvent.click(container.firstChild)
    fireEvent.click(container.firstChild)

    expect(componentProps.onClick).toHaveBeenCalledTimes(2)
  })

  test('should set button type correctly', () => {
    const { queryByTestId, rerender } = render(
      <Button {...componentProps} type={null} />
    )

    const button = queryByTestId(componentProps.id)

    expect(button.type).toEqual('submit')

    rerender(<Button {...componentProps} type={'reset'} />)

    expect(button.type).toEqual('reset')
  })
})
