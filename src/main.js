import { createApp } from "vue";
import { router } from "./router";
import "./style.scss";
import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
