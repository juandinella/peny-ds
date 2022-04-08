import { options } from './constants'
import Button from './Button'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Button)
const ListTemplate = getListTemplate(Button)

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'This is a Button!',
  },
  argTypes: {
    variant: getOptionsArgTypes(options.variants),
    type: getOptionsArgTypes(options.types),
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const Variants = ListTemplate.bind({})
Variants.args = { items: options.variants.map((variant) => ({ variant })) }

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const Inline = Template.bind({})
Inline.args = { isInline: true }

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
