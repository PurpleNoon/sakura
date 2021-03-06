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
  title: 'Sakura/Button/Plain',
  component: SrButton,
  args: {
    plain: true,
  },
  argTypes: {
    ...argTypes,
  },
}

export const PlainNormal = Template.bind({})
PlainNormal.args = {
  ...Normal.args,
}

export const PlainPrimary = Template.bind({})
PlainPrimary.args = {
  ...Primary.args,
}

export const PlainSuccess = Template.bind({})
PlainSuccess.args = {
  ...Success.args,
}

export const PlainInfo = Template.bind({})
PlainInfo.args = {
  ...Info.args,
}

export const PlainWarning = Template.bind({})
PlainWarning.args = {
  ...Warning.args,
}

export const PlainDanger = Template.bind({})
PlainDanger.args = {
  ...Danger.args,
}
