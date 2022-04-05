import Text from './Text'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Text)
const ListTemplate = getListTemplate(Text)

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    mSize: getOptionsArgTypes(options.sizes),
    weight: getOptionsArgTypes(options.weights),
    alignment: getOptionsArgTypes(options.alignments),
    type: getOptionsArgTypes(options.types),
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Weights = ListTemplate.bind({})
Weights.args = { items: options.weights.map((weight) => ({ weight })) }

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }

export const Alignments = ListTemplate.bind({})
Alignments.args = {
  items: options.alignments.map((alignment) => ({ alignment })),
}
