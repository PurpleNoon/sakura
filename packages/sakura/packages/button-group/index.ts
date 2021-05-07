import { App } from 'vue'
import ButtonGroup from '../button/src/button-group.vue'

ButtonGroup.install = function (app: App) {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
