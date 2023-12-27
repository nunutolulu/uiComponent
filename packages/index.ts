import { App, Plugin } from "vue";

import { ButtonPlugin } from "./components/Button";
import { LayoutPlugin } from "./components/Layout";
import { IconPlugin } from "./components/Icon";
import { ContainerPlugin } from "./components/Container";

const LuluUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    LayoutPlugin.install?.(app);
    IconPlugin.install?.(app);
    ContainerPlugin.install?.(app)
  },
};

export default LuluUIPlugin;

export * from "./components/Button";
export * from "./components/Layout";
export * from "./components/Icon"
export * from './components/Container'