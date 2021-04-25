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
  title: 'Element/Button-Round',
  component: ElButton,
  args: {
    round: true
  }
}

export const RoundNormal = Template.bind({})
RoundNormal.args = {
  ...Normal.args,
}

export const RoundPrimary = Template.bind({})
RoundPrimary.args = {
  ...Primary.args,
}

export const RoundSuccess = Template.bind({})
RoundSuccess.args = {
  ...Success.args,
}

export const RoundInfo = Template.bind({})
RoundInfo.args = {
  ...Info.args,
}

export const RoundWarning = Template.bind({})
RoundWarning.args = {
  ...Warning.args,
}

export const RoundDanger = Template.bind({})
RoundDanger.args = {
  ...Danger.args,
}
