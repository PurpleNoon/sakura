// import {
//   Normal,
//   Primary,
//   Success,
//   Info,
//   Warning,
//   Danger
// } from './SrButton-Type.stories'
// import { Template } from './Template'
import SrButton from 'sakura/button/src/button.vue'
import SrButtonGroup from 'sakura/button/src/button-group.vue'

export default {
  title: 'Sakura/Button/ButtonGroup',
  component: SrButtonGroup,
}

const Template = (arg, { argTypes }) => {
  return {
    components: {
      SrButton,
      SrButtonGroup
    },
    template: `
      <sr-button-group>
        <sr-button type="primary">1</sr-button>
        <sr-button type="primary">2</sr-button>
        <sr-button type="primary">3</sr-button>
      </sr-button-group>
    `
  }
}

export const ButtonGroup = Template.bind({})
