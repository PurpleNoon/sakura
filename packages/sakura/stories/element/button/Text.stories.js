import ElButton from 'ele/button/src/button.vue'
import { Template, argTypes } from './Template'

export default {
  title: 'Element/Button/Text',
  component: ElButton,
  argTypes: {
    ...argTypes,
  },
}

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  _text: 'Text',
}

export const TextDisabled = Template.bind({})
TextDisabled.args = {
  type: 'text',
  disabled: true,
  _text: 'Text',
}
