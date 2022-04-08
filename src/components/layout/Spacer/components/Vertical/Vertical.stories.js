import Vertical from './Vertical'
import { options } from '../../constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../../../helpers/storybook'

const Template = getTemplate(Vertical)
const ListTemplate = getListTemplate(Vertical)

export default {
  title: 'Layout/Spacer/Vertical',
  component: Vertical,
  args: {
    isVisible: true,
    height: 100,
    maxHeight: 100,
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    mSize: getOptionsArgTypes(options.sizes),
    height: { control: 'number' },
    maxHeight: { control: 'number' },
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const MSizes = ListTemplate.bind({})
MSizes.args = { items: options.sizes.map((size) => ({ size })) }
