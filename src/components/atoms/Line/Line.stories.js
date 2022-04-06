import Line from './Line'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Line)
const ListTemplate = getListTemplate(Line)

export default {
  title: 'Atoms/Line',
  component: Line,
  args: {},
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    type: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
