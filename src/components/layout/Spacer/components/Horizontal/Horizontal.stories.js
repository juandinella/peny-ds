import Horizontal from './Horizontal'
import { options } from '../../constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../../../helpers/storybook'

const Template = getTemplate(Horizontal)
const ListTemplate = getListTemplate(Horizontal)

export default {
  title: 'Layout/Spacer/Horizontal',
  component: Horizontal,
  args: {
    isVisible: true,
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    mSize: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const MSizes = ListTemplate.bind({})
MSizes.args = { items: options.sizes.map((size) => ({ size })) }
