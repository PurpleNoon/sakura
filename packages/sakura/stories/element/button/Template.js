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

export const argTypes = {
  type: {
    description: '按钮类型',
    control: 'select',
    options: [
      '',
      'primary',
      'success',
      'info',
      'warning',
      'danger',
      'text',
    ],
  },
  size: {
    description: '按钮尺寸',
    control: 'select',
    options: [
      '',
      'medium',
      'small',
      'mini',
    ],
  },
  plain: {
    description: '是否朴素按钮',
    defaultValue: false,
    control: 'boolean',
  },
  round: {
    description: '是否圆角按钮',
    defaultValue: false,
    control: 'boolean',
  },
  circle: {
    description: '是否圆形按钮',
    defaultValue: false,
    control: 'boolean',
  },
  loading: {
    description: '是否加载中状态',
    control: 'boolean',
    defaultValue: false,
  },
  disabled: {
    description: '是否禁用状态',
    control: 'boolean',
    defaultValue: false,
  },
  icon: {
    description: '图标类名',
    control: 'string',
  },
  autofocus: {
    description: '是否默认聚焦',
    control: 'boolean',
    defaultValue: false,
  },
  nativeType: {
    description: '原生 type 属性',
    defaultValue: 'button',
    control: 'select',
    options: [
      'button',
      'submit',
      'reset',
    ],
  },
}
