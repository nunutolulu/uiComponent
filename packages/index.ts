import { App, Plugin } from 'vue';

import { ButtonPlugin } from './components/Button';

const MyKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default MyKitPlugin;

export * from './components/Button';
