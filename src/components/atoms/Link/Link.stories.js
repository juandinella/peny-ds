import Link from './Link'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Link)
const ListTemplate = getListTemplate(Link)

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {
    children: 'Im a link',
    href: '#',
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
