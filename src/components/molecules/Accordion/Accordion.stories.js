import Accordion from './Accordion'
import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Accordion)

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  id: 'test',
  args: {
    title: 'Accordion Title',
    content: 'Accordion content',
    id: 'accordion_id',
  },
  argTypes: {},
}

export const Default = Template.bind({})

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
