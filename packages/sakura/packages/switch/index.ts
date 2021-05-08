import { App } from 'vue'
import Switch from './src/switch.vue'

Switch.install = function (app: App) {
  app.component(Switch.name, Switch)
}

export default Switch
