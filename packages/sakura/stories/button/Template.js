import ElButton from 'sakura/button/src/button.vue'
import 'sakura-style/button.scss'
import 'sakura-style/icon.scss'

export const Template = (args, { argTypes }) => ({
  components: { ElButton },
  setup() {
    return { args }
  },
  template: `<el-button v-bind="args">{{args._text}}</el-button>`
})
