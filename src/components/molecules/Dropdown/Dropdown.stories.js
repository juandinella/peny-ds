import React from 'react'
import Dropdown from './Dropdown'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Dropdown)
const ListTemplate = getListTemplate(Dropdown)

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  args: {
    buttonContent: 'Toggle Dropdown',
    id: 'dropdown_id',
    textList: [
      {
        content: <a href="#">Im a Link</a>,
      },
      { content: 'Item Two' },
      { content: 'Item Three' },
    ],
  },
  argTypes: {
    alignment: getOptionsArgTypes(options.alignments),
  },
}

export const Default = Template.bind({})

export const Alignments = ListTemplate.bind({})
Alignments.args = {
  items: options.alignments.map((alignment) => ({ alignment })),
}

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
