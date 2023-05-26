import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import firebase from "firebase/app";
// import "firebase/database";

createApp(App).use(store).use(router).mount("#app");
