import { App, Plugin } from 'vue';
import Icon from './src/index.vue';

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('my-icon', Icon);
  },
};

export { Icon };
