import Card from './Card'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Card)
const ListTemplate = getListTemplate(Card)

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children: 'Card',
    size: 'md',
  },
  argTypes: {
    borderRadius: getOptionsArgTypes(options.borderRadiuses),
    size: getOptionsArgTypes(options.sizes),
    mSize: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Centered = Template.bind({})
Centered.args = { center: true }

export const BorderRadiuses = ListTemplate.bind({})
BorderRadiuses.args = {
  items: options.borderRadiuses.map((borderRadius) => ({ borderRadius })),
}
