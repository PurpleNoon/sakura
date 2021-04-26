import Button from 'sakura/button/index'
import { App } from 'vue'

const components = [
  Button,
]

interface ElementOptions {
  size: string;
  zIndex: number;
}

const install = function (app: App, opts = {} as ElementOptions) {
  components.forEach(component => {
    app.component(component.name, component);
  });

  app.config.globalProperties.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
}

export default {
  version: '0.0.1',
  install,
  Button,
}
