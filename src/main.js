import { createApp } from "vue";

import "./assets/scss/index.scss";

import App from "./App.vue";

import { router } from "./router.js";
import { store } from "./store/index.js";
import { i18n } from "./i18n/index.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");
