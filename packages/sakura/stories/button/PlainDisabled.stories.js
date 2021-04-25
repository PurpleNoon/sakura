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
  title: 'Sakura/Button/PlainDisabled',
  component: SrButton,
  args: {
    disabled: true,
    plain: true,
  },
  argTypes: {
    ...argTypes,
  },
}

export const PlainDisabledNormal = Template.bind({})
PlainDisabledNormal.args = {
  ...Normal.args,
}

export const PlainDisabledPrimary = Template.bind({})
PlainDisabledPrimary.args = {
  ...Primary.args,
}

export const PlainDisabledSuccess = Template.bind({})
PlainDisabledSuccess.args = {
  ...Success.args,
}

export const PlainDisabledInfo = Template.bind({})
PlainDisabledInfo.args = {
  ...Info.args,
}

export const PlainDisabledWarning = Template.bind({})
PlainDisabledWarning.args = {
  ...Warning.args,
}

export const PlainDisabledDanger = Template.bind({})
PlainDisabledDanger.args = {
  ...Danger.args,
}
