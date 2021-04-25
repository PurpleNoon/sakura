import ElButton from 'ele/button/src/button.vue'
import 'ele-style/button.scss'
import 'ele-style/icon.scss'

export const Template = (args, { argTypes }) => ({
  components: { ElButton },
  setup() {
    return { args }
  },
  template: `<el-button v-bind="args">{{args._text}}</el-button>`
})
