import RadioButtonList from './RadioButtonList'
import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(RadioButtonList)

const radioOne = {
  label: 'Radio One',
  value: 'one',
  checked: true,
  id: 'radio-one',
}

const radioTwo = {
  label: 'Radio Two',
  value: 'two',
  checked: false,
  id: 'radio-two',
}

export default {
  title: 'Molecules/RadioButtonList',
  component: RadioButtonList,
  args: {
    radioList: [radioOne, radioTwo],
    radioName: 'radio-name',
  },
  argTypes: {},
}

export const Default = Template.bind({})

export const Horizontal = Template.bind({})
Horizontal.args = { horizontal: true }

export const Skeleton = Template.bind({})
Skeleton.args = { shouldRender: () => false }
