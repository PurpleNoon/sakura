import SrButton from 'sakura/button/src/button.vue'
import { Template, argTypes } from './Template'

export default {
  title: 'Sakura/Button/Icon',
  component: SrButton,
  args: {
    type: 'primary',
  },
  argTypes: {
    ...argTypes,
  },
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'el-icon-edit',
}

export const IconWithText = Template.bind({})
IconWithText.args = {
  icon: 'el-icon-edit',
  _text: '搜索',
}


const IconWithContentTemplate = (args, { argTypes }) => ({
  components: { SrButton },
  setup() {
    return { args }
  },
  template: `<sr-button v-bind="args">上传<i class="el-icon-edit el-icon--right"></i></sr-button>`
})

export const IconWithContent = IconWithContentTemplate.bind({})
