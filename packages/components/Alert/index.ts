import { App, Plugin } from 'vue';
import Alert from './src/index.vue';

export const AlertPlugin: Plugin = {
  install(app: App) {
    app.component('my-alert', Alert);
  },
};

export { Alert };
