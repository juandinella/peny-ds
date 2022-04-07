import Picture from './Picture'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Picture)

export default {
  title: 'Atoms/Picture',
  component: Picture,
  args: {
    src: 'https://picsum.photos/id/1033/400/400',
    width: 200,
    minWidth: 100,
    altText: 'A simple image',
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
}

export const Default = Template.bind({})

export const Height = Template.bind({})
Height.args = { src: 'https://picsum.photos/id/1033/400/800', height: 400 }

export const Width = Template.bind({})
Width.args = { src: 'https://picsum.photos/id/1033/800/400', width: 400 }

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
