import SrButton from 'sakura/button/src/button.vue'
import { Template, argTypes } from './Template'

export default {
  title: 'Sakura/Button/Type',
  component: SrButton,
  argTypes: {
    ...argTypes,
  },
}

export const Normal = Template.bind({})
Normal.args = {
  _text: 'Normal'
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  _text: 'Primary'
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  _text: 'Success'
}

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  _text: 'Info'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  _text: 'Warning'
}


export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  _text: 'Danger'
}
