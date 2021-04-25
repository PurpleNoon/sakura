import {
  Normal,
  Primary,
  Success,
  Info,
  Warning,
  Danger
} from './Type.stories'
import { Template } from './Template'
import ElButton from 'sakura/button/src/button.vue'

export default {
  title: 'Element/Button-PlainDisabled',
  component: ElButton,
  args: {
    disabled: true,
    plain: true
  }
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
