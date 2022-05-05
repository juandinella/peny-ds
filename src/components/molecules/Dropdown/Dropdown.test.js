import React from 'react'

import { cleanup, render } from '@testing-library/react'

import SelectList from './SelectList'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Molecules\/SelectList$/,
})

afterEach(cleanup)

const radioOne = {
  label: 'Radio One',
  value: 'one',
  icon: 'icon-sms',
  checked: true,
  id: 'radio_one',
  onChange: jest.fn(),
}

const radioTwo = {
  label: 'Radio Two',
  value: 'two',
  icon: 'icon-sms',
  checked: false,
  id: 'radio_two',
  onChange: jest.fn(),
}

const componentProps = {
  radioName: 'radio_name',
  id: 'composition',
  radioList: [radioOne, radioTwo],
}

beforeEach(() => {
  radioOne.onChange.mockClear()
  radioTwo.onChange.mockClear()
})

describe('<SelectList />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<SelectList {...componentProps} />)

    const comp = queryByTestId(componentProps.id)

    expect(comp).toBeTruthy()
    expect(comp.children).toHaveLength(componentProps.radioList.length)
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <SelectList {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${radioOne.id}_skeleton`)).toBeTruthy()
    expect(queryByTestId(`${radioTwo.id}_skeleton`)).toBeTruthy()
  })

  test('should render radio buttons', () => {
    const { queryByTestId } = render(<SelectList {...componentProps} />)

    const radioFirst = queryByTestId(componentProps.radioList[0].id)

    const radioSecond = queryByTestId(componentProps.radioList[1].id)

    expect(radioFirst).toBeTruthy()
    expect(radioSecond).toBeTruthy()
  })

  test('radio name should appear on radio buttons', () => {
    const { queryByTestId } = render(<SelectList {...componentProps} />)

    const radioFirstInput = queryByTestId(
      componentProps.radioList[0].id
    ).querySelector('input')

    const radioSecondInput = queryByTestId(
      componentProps.radioList[1].id
    ).querySelector('input')

    expect(radioFirstInput.name).toEqual(componentProps.radioName)
    expect(radioSecondInput.name).toEqual(componentProps.radioName)
  })
})
