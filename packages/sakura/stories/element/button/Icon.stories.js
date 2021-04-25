import ElButton from 'ele/button/src/button.vue'
import { Template } from './Template'

export default {
  title: 'Element/Button-Icon',
  component: ElButton,
  args: {
    type: 'primary',
  }
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
  components: { ElButton },
  setup() {
    return { args }
  },
  template: `<el-button v-bind="args">上传<i class="el-icon-edit el-icon--right"></i></el-button>`
})

export const IconWithContent = IconWithContentTemplate.bind({})
