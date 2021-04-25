import {
  Normal,
  Primary,
  Success,
  Info,
  Warning,
  Danger
} from './Type.stories'
import { Template, argTypes } from './Template'
import SrButton from 'sakura/button/src/button.vue'

export default {
  title: 'Sakura/Button/Circle',
  component: SrButton,
  args: {
    circle: true,
    icon: 'el-icon-search',
    // _text: 'O',
  },
  argTypes: {
    ...argTypes,
  },
}

export const CircleNormal = Template.bind({})
CircleNormal.args = {
  type: Normal.args.type,
}

export const CirclePrimary = Template.bind({})
CirclePrimary.args = {
  type: Primary.args.type,
}

export const CircleSuccess = Template.bind({})
CircleSuccess.args = {
  type: Success.args.type,
}

export const CircleInfo = Template.bind({})
CircleInfo.args = {
  type: Info.args.type,
}

export const CircleWarning = Template.bind({})
CircleWarning.args = {
  type: Warning.args.type,
}

export const CircleDanger = Template.bind({})
CircleDanger.args = {
  type: Danger.args,
}
