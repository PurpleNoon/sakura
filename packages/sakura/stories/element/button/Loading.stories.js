import ElButton from 'ele/button/src/button.vue'
import { Template, argTypes } from './Template'

export default {
  title: 'Element/Button/Loading',
  component: ElButton,
  argTypes: {
    ...argTypes,
  },
}

export const Loading = Template.bind({})
Loading.args = {
  type: 'primary',
  loading: true,
  _text: 'Loading',
}
