import {
  Normal,
  Primary,
  Success,
  Info,
  Warning,
  Danger
} from './Type.stories'
import { Template, argTypes } from './Template'
import ElButton from 'ele/button/src/button.vue'

export default {
  title: 'Element/Button/Disabled',
  component: ElButton,
  args: {
    disabled: true,
  },
  argTypes: {
    ...argTypes,
  },
}

export const DisabledNormal = Template.bind({})
DisabledNormal.args = {
  ...Normal.args,
}

export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
  ...Primary.args,
}

export const DisabledSuccess = Template.bind({})
DisabledSuccess.args = {
  ...Success.args,
}

export const DisabledInfo = Template.bind({})
DisabledInfo.args = {
  ...Info.args,
}

export const DisabledWarning = Template.bind({})
DisabledWarning.args = {
  ...Warning.args,
}

export const DisabledDanger = Template.bind({})
DisabledDanger.args = {
  ...Danger.args,
}
