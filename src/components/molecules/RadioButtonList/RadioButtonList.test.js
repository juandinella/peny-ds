import React from 'react'

import { render, cleanup } from '@testing-library/react'

import RadioButtonList from './RadioButtonList'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Molecules\/RadioButtonList$/,
})

const radioOne = {
  label: 'Radio One',
  value: 'one',
  checked: true,
  id: 'radio-one',
}

const radioTwo = {
  label: 'Radio Two',
  value: 'two',
  checked: false,
  id: 'radio-two',
}

const componentProps = {
  id: 'unique_id',
  radioName: 'radio-name',
  className: 'custom_class',
  radioList: [radioOne, radioTwo],
}

afterEach(cleanup)

describe('<RadioButtonList />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<RadioButtonList {...componentProps} />)

    const radiolist = queryByTestId(componentProps.id)

    expect(radiolist).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <RadioButtonList {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${radioOne.id}_skeleton`)).toBeTruthy()
    expect(queryByTestId(`${radioTwo.id}_skeleton`)).toBeTruthy()
  })

  test('should render class correctly', () => {
    const { queryByTestId, rerender } = render(
      <RadioButtonList {...componentProps} />
    )

    const radioList = queryByTestId(componentProps.id)

    expect(radioList.className).toContain('custom_class')

    rerender(<RadioButtonList {...componentProps} className={null} />)

    expect(radioList.className).not.toContain('custom_class')
  })
})
