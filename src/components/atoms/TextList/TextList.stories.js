import TextList from './TextList'
import { options } from './constants'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(TextList)
const ListTemplate = getListTemplate(TextList)

export default {
  title: 'Atoms/TextList',
  component: TextList,
  args: {
    inline: false,
    list: [{ content: 'First Item' }, { content: 'Second Item' }],
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    bulletColor: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Numbered = Template.bind({})
Numbered.args = { numbered: true, bulletColor: 'neutral-900' }

export const BulletColors = ListTemplate.bind({})
BulletColors.args = {
  items: options.colors.map((bulletColor) => ({ bulletColor })),
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
