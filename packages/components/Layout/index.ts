import { App, Plugin } from "vue";
import Col from "./src/col.vue";
import Row from "./src/row.vue";

export const LayoutPlugin: Plugin = {
  install(app: App) {
    app.component("my-col", Col);
    app.component("my-row", Row);
  },
};

export { Col };
export { Row };
// export { LayoutPlugin };
