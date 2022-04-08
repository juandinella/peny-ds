import React from 'react'

import { render, fireEvent, cleanup } from '@testing-library/react'

import RadioButton from './RadioButton'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/RadioButton$/,
})

const componentProps = {
  id: 'test-id',
  radioName: 'test-name',
  label: 'test-label',
  checked: false,
  disabled: false,
  onChange: jest.fn(),
}

afterEach(cleanup)

describe('<RadioButton />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<RadioButton {...componentProps} />)

    const radioButton = queryByTestId(componentProps.id)

    expect(radioButton).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <RadioButton {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('input should have radio name', () => {
    const { container } = render(<RadioButton {...componentProps} />)

    const input = container.querySelector('input')

    expect(input.name).toEqual(componentProps.radioName)
  })

  test('should render content correctly', () => {
    const { container } = render(<RadioButton {...componentProps} />)

    const label = container.querySelector('label')

    expect(label.textContent).toEqual(componentProps.label)
  })

  test('should call function on click', () => {
    const { container } = render(<RadioButton {...componentProps} />)

    fireEvent.click(container.getElementsByTagName('input')[0])

    expect(componentProps.onChange).toHaveBeenCalledTimes(1)
  })
})
