import SrButton from 'sakura/button/src/button.vue'
import { Template, argTypes } from './Template'

export default {
  title: 'Sakura/Button/Text',
  component: SrButton,
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
