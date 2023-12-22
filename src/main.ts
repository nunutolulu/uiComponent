import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MyKit from "../packages";

import Preview from "./components/Preview.vue";

const app = createApp(App);
app.component("Preview", Preview);
app.use(router).use(MyKit);
app.mount("#app");
