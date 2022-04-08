import RadioButton from './RadioButton'
import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(RadioButton)

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  args: {
    label: 'Im a Radio Button',
    id: 'radio-id',
    radioName: 'radio-name',
    onChange: () => true,
  },
  argTypes: {},
}

export const Default = Template.bind({})

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
