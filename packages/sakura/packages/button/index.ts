import SrButton from './src/button.vue';
import { App } from 'vue'

SrButton.install = function (app: App) {
  app.component(SrButton.name, SrButton);
};

export default SrButton;
