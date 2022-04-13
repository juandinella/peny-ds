import Container from './Container'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Container)
const ListTemplate = getListTemplate(Container)

export default {
  title: 'Layout/Container',
  component: Container,
  args: {
    children: 'This is a Child!',
  },
  argTypes: {
    space: getOptionsArgTypes(options.spaces),
    mspace: getOptionsArgTypes(options.spaces),
    borderRadius: getOptionsArgTypes(options.borderRadiuses),
    borderColor: getOptionsArgTypes(options.borderColors),
    justifyContent: getOptionsArgTypes(options.justifyContent),
    mJustifyContent: getOptionsArgTypes(options.justifyContent),
    alignItems: getOptionsArgTypes(options.alignItems),
    mAlignItems: getOptionsArgTypes(options.alignItems),
    alignContent: getOptionsArgTypes(options.alignContent),
    mAlignContent: getOptionsArgTypes(options.alignContent),
    direction: getOptionsArgTypes(options.direction),
    mDirection: getOptionsArgTypes(options.direction),
    wrap: getOptionsArgTypes(options.wrap),
    maxWidth: { control: 'number' },
    children: { control: 'text' },
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const AlignItems = ListTemplate.bind({})
AlignItems.args = {
  items: options.alignItems.map((alignItems) => ({ alignItems })),
  isVisible: true,
}

export const JustifyContent = ListTemplate.bind({})
JustifyContent.args = {
  items: options.justifyContent.map((justifyContent) => ({ justifyContent })),
  isVisible: true,
}

export const AlignContent = ListTemplate.bind({})
AlignContent.args = {
  items: options.alignContent.map((alignContent) => ({ alignContent })),
  isVisible: true,
}

export const Direction = ListTemplate.bind({})
Direction.args = {
  items: options.direction.map((direction) => ({ direction })),
  isVisible: true,
}

export const mDirection = ListTemplate.bind({})
mDirection.args = {
  items: options.direction.map((direction) => ({ direction })),
  isVisible: true,
}

export const mAlignContent = ListTemplate.bind({})
mAlignContent.args = {
  items: options.alignContent.map((alignContent) => ({ alignContent })),
  isVisible: true,
}

export const mAlignItems = ListTemplate.bind({})
mAlignItems.args = {
  items: options.alignItems.map((alignItems) => ({ alignItems })),
  isVisible: true,
}

export const mJustifyContent = ListTemplate.bind({})
mJustifyContent.args = {
  items: options.justifyContent.map((justifyContent) => ({ justifyContent })),
  isVisible: true,
}

export const Wrap = ListTemplate.bind({})
Wrap.args = {
  items: options.wrap.map((wrap) => ({ wrap })),
  isVisible: true,
}

export const Spaces = ListTemplate.bind({})
Spaces.args = {
  items: options.spaces.map((space) => ({ space })),
  isVisible: true,
}

export const MSpaces = ListTemplate.bind({})
MSpaces.args = {
  items: options.spaces.map((space) => ({ space })),
  isVisible: true,
}

export const BorderRadiuses = ListTemplate.bind({})
BorderRadiuses.args = {
  items: options.borderRadiuses.map((borderRadius) => ({ borderRadius })),
  space: 'sm',
}

export const BorderColors = ListTemplate.bind({})
BorderColors.args = {
  items: options.borderColors.map((borderColor) => ({ borderColor })),
  space: 'sm',
}
