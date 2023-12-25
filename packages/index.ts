import { App, Plugin } from "vue";

import { ButtonPlugin } from "./components/Button";
import { LayoutPlugin } from "./components/Layout";

const LuluUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    LayoutPlugin.install?.(app);
  },
};

export default LuluUIPlugin;

export * from "./components/Button";
export * from "./components/Layout";
