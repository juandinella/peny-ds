import TextField from './TextField'
import { options } from './constants'

import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplateWithValue,
} from '../../../helpers/storybook'

const Template = getTemplateWithValue(TextField)
const ListTemplate = getListTemplate(TextField)

export default {
  title: 'Molecules/TextField',
  component: TextField,
  args: {
    label: 'Im an TextField',
    id: 'test-id',
    placeholder: 'This is a placeholder',
    size: 'sm',
    textarea: false,
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    size: getOptionsArgTypes(options.sizes),
    color: getOptionsArgTypes(options.colors),
  },
}

export const Default = Template.bind({})

export const Value = Template.bind({})
Value.args = {
  value: 'Others mainly cakehole Thorin moldy facial.',
  id: 'value-id',
}

export const PatternOnlyNumbers = Template.bind({})
PatternOnlyNumbers.args = { pattern: '(?![0-9]).+', id: 'pattern-id' }

export const ValueSuccess = Template.bind({})
ValueSuccess.args = {
  value: 'Others mainly cakehole Thorin moldy facial.',
  icon: true,
  id: 'icon-id',
}

export const ValueError = Template.bind({})
ValueError.args = {
  value: 'Others mainly cakehole Thorin moldy facial.',
  error: 'Im an error',
  icon: true,
  id: 'error-id',
}

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const Inline = Template.bind({})
Inline.args = { isInline: true, id: 'inline-id' }

export const Sizes = ListTemplate.bind({})
Sizes.args = {
  value: 'text',
  hideLabel: true,
  id: 'size-id',
  items: options.sizes.map((size) => ({ size })),
}

export const Colors = ListTemplate.bind({})
Colors.args = {
  value: 'text',
  items: options.colors.map((color) => ({ color })),
}

export const Textarea = Template.bind({})
Textarea.args = {
  value:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  textarea: true,
  id: 'textarea-id',
}

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
