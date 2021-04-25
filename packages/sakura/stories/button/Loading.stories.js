import ElButton from 'sakura/button/src/button.vue'
import { Template } from './Template'

export default {
  title: 'Element/Button-Loading',
  component: ElButton,
}

export const Loading = Template.bind({})
Loading.args = {
  type: 'primary',
  loading: true,
  _text: 'Loading',
}
