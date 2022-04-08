import React from 'react'

import { cleanup, render, fireEvent } from '@testing-library/react'

import TextList from './TextList'

import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^Atoms\/TextList$/,
})

afterEach(cleanup)

const componentProps = {
  list: [
    {
      content: 'First Item',
      onClick: jest.fn(),
      className: 'custom_first',
    },
    {
      content: 'Second Item',
      onClick: jest.fn(),
      className: 'custom_second',
    },
  ],
}

beforeEach(() => {
  componentProps.list[0].onClick.mockClear()
  componentProps.list[1].onClick.mockClear()
})

describe('<TextList />', () => {
  test('should render texts correctly', () => {
    const { container } = render(<TextList {...componentProps} />)

    const listChildrens = container.querySelectorAll('ul > li')

    expect(listChildrens).toHaveLength(2)

    expect(listChildrens[0].textContent).toEqual('First Item')
    expect(listChildrens[1].textContent).toEqual('Second Item')
  })

  test('should render skeleton', () => {
    const { queryByTestId } = render(
      <TextList {...componentProps} shouldRender={() => false} />
    )

    expect(queryByTestId(`${componentProps.id}_skeleton`)).toBeTruthy()
  })

  test('should render class correctly', () => {
    const { container, rerender } = render(
      <TextList {...componentProps} className="custom_class" />
    )

    const list = container.firstChild

    expect(list.className).toContain('custom_class')

    rerender(<TextList {...componentProps} className={null} />)

    expect(list.className).not.toContain('custom_class')
  })

  test('should render item children correctly', () => {
    const { container, rerender } = render(<TextList {...componentProps} />)

    expect(container.querySelector('ul').children.length).toEqual(2)

    rerender(
      <TextList
        {...componentProps}
        list={[
          { content: 'First Item', children: <div>Children</div> },
          { content: 'Second Item' },
        ]}
      />
    )

    const items = container.querySelector('ul').children

    expect(items.length).toEqual(3)
    expect(items[1].textContent).toEqual('Children')
  })

  test('should render item class correctly', () => {
    const { container, rerender } = render(
      <TextList {...componentProps} itemClass="custom_class" />
    )

    const items = container.querySelectorAll('li')

    expect(items[0].className).toContain('custom_class')
    expect(items[1].className).toContain('custom_class')

    rerender(<TextList {...componentProps} itemClass={null} />)

    expect(items[0].className).not.toContain('custom_class')
    expect(items[1].className).not.toContain('custom_class')
  })

  test('item should be clicked', () => {
    const { container, rerender } = render(<TextList {...componentProps} />)

    const items = container.querySelectorAll('li')

    fireEvent.click(items[0])
    fireEvent.click(items[1])

    expect(componentProps.list[0].onClick).toHaveBeenCalledTimes(1)
    expect(componentProps.list[1].onClick).toHaveBeenCalledTimes(1)

    rerender(
      <TextList
        {...componentProps}
        list={[{ content: 'First Item' }, { content: 'Second Item' }]}
      />
    )

    fireEvent.click(items[0])
    fireEvent.click(items[1])

    expect(componentProps.list[0].onClick).toHaveBeenCalledTimes(1)
    expect(componentProps.list[1].onClick).toHaveBeenCalledTimes(1)
  })
})
