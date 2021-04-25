import SrButton from 'sakura/button/src/button.vue'
import { Template, argTypes } from './Template'

export default {
  title: 'Sakura/Button/Loading',
  component: SrButton,
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
