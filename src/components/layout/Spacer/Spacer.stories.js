import Spacer from './Spacer'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Spacer)
const ListTemplate = getListTemplate(Spacer)

export default {
  title: 'Layout/Spacer',
  component: Spacer,
  args: {
    isVisible: true,
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    mSize: getOptionsArgTypes(options.sizes),
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const MSizes = ListTemplate.bind({})
MSizes.args = { items: options.sizes.map((size) => ({ size })) }
