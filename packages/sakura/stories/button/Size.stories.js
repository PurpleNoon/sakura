import { Template, argTypes } from './Template'
import SrButton from 'sakura/button/src/button.vue'

export default {
  title: 'Sakura/Button/Size',
  component: SrButton,
  argTypes: {
    ...argTypes,
  },
}

export const DefaultSize = Template.bind({})
DefaultSize.args = {
}

export const MediumSize = Template.bind({})
MediumSize.args = {
  size: 'medium',
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 'small',
}

export const MiniSize = Template.bind({})
MiniSize.args = {
  size: 'mini',
}

export const RoundDefaultSize = Template.bind({})
RoundDefaultSize.args = {
}

export const RoundMediumSize = Template.bind({})
RoundMediumSize.args = {
  size: 'medium',
}

export const RoundSmallSize = Template.bind({})
RoundSmallSize.args = {
  size: 'small',
}

export const RoundMiniSize = Template.bind({})
RoundMiniSize.args = {
  size: 'mini',
}
