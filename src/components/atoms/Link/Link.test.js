import React from 'react'

import { render, fireEvent, cleanup } from '@testing-library/react'

import Link from './Link'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/Link$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Go!',
  onClick: jest.fn(),
}

afterEach(cleanup)
beforeEach(() => {
  componentProps.onClick.mockClear()
})

describe('<Link />', () => {
  test('should render component correctly', () => {
    const { queryByTestId } = render(<Link {...componentProps} />)

    const link = queryByTestId(componentProps.id)

    expect(link).toBeTruthy()
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <Link {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should render content correctly', () => {
    const { queryByTestId } = render(<Link {...componentProps} />)

    const link = queryByTestId(componentProps.id)

    expect(link.textContent).toEqual(componentProps.children)
  })

  test('should call click function', () => {
    const { container } = render(<Link {...componentProps} />)

    fireEvent.click(container.firstChild)

    expect(componentProps.onClick).toHaveBeenCalledTimes(1)
  })

  test('should have href', () => {
    const { queryByTestId } = render(
      <Link {...componentProps} href="https://google.com/" />
    )

    const link = queryByTestId(componentProps.id)

    expect(link.href).toEqual('https://google.com/')
  })

  test('should have target', () => {
    const { queryByTestId } = render(
      <Link {...componentProps} href="https://google.com/" target="_blank" />
    )

    const link = queryByTestId(componentProps.id)

    expect(link.target).toEqual('_blank')
  })
})
