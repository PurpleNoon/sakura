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
  title: 'Sakura/Button/Disabled',
  component: SrButton,
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
