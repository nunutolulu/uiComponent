import { App, Plugin } from "vue";
import Container from "./src/container.vue";
import Header from "./src/header.vue";
import Footer from "./src/footer.vue";
import Aside from "./src/aside.vue";
import Main from "./src/main.vue";

export const ContainerPlugin: Plugin = {
  install(app: App) {
    app.component("my-container", Container);
    app.component("my-header", Header);
    app.component("my-footer", Footer);
    app.component("my-aside", Aside);
    app.component("my-main", Main);
  },
};

export { Container };
export { Header };
export { Footer };
export { Aside };
export { Main };
