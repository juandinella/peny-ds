import Skeleton from './Skeleton'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Skeleton)

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  args: {
    width: 124,
    show: true,
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
}

export const Default = Template.bind({})
