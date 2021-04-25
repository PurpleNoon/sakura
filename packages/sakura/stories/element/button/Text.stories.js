import ElButton from 'ele/button/src/button.vue'
import { Template } from './Template'

export default {
  title: 'Element/Button-Text',
  component: ElButton,
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
