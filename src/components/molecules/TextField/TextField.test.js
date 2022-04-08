import React from 'react'

import { cleanup, render, fireEvent } from '@testing-library/react'

import TextField from './TextField'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Molecules\/TextField$/,
})

const componentProps = {
  id: 'this-id',
  label: 'Label',
  name: 'name',
  type: 'text',
  value: '1.00000000',
  onChange: jest.fn(),
  error: 'Error',
  icon: true,
  textarea: false,
}

afterEach(cleanup)

beforeEach(() => {
  componentProps.onChange.mockClear()
})

describe('<TextField />', () => {
  test('should render input correctly', () => {
    const { getByTestId, container } = render(<TextField {...componentProps} />)

    const textfield = getByTestId(componentProps.id)

    const input = container.querySelector('input')

    expect(textfield).toBeTruthy()
    expect(input).toBeTruthy()
  })

  test('should render textarea correctly', () => {
    const { getByTestId, container } = render(
      <TextField {...componentProps} textarea />
    )

    const textfield = getByTestId(componentProps.id)

    const textarea = container.querySelector('textarea')

    expect(textfield).toBeTruthy()
    expect(textarea).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <TextField {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should render label correctly', () => {
    const { container } = render(<TextField {...componentProps} />)

    const label = container.querySelector('label')

    expect(label.innerHTML).toEqual(componentProps.label)
  })

  test('should render value correctly', () => {
    const { getByTestId } = render(<TextField {...componentProps} />)

    const textfield = getByTestId(componentProps.id)

    expect(textfield.value).toEqual(componentProps.value)
  })

  test('should render name correctly', () => {
    const { container } = render(<TextField {...componentProps} />)

    const input = container.querySelector('input')

    expect(input.getAttribute('name')).toEqual(componentProps.name)
  })

  test('should render type correctly', () => {
    const { getByTestId } = render(<TextField {...componentProps} />)

    const textfield = getByTestId(componentProps.id)

    expect(textfield.type).toEqual(componentProps.type)
  })

  test('should render error correctly', () => {
    const { container, getByTestId } = render(<TextField {...componentProps} />)

    const input = getByTestId(componentProps.id)

    expect(container.querySelector('.input-feedback')).toBeTruthy()

    expect(container.querySelector('.input-feedback')).toBeTruthy()

    input.focus()

    expect(container.querySelector('.input-icon')).toBeFalsy()

    expect(container.querySelector('.input-icon')).toBeFalsy()
  })

  test('should change input correctly', () => {
    const { getByTestId } = render(<TextField {...componentProps} />)

    fireEvent.change(getByTestId(componentProps.id), {
      target: { value: '11' },
    })

    expect(componentProps.onChange).toHaveBeenCalledTimes(1)
  })
})
