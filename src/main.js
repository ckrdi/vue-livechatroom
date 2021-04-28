import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { projectAuth } from "./firebase/config";
import "./assets/main.css";

let app;
// prevent the router guard to send user to login page when
// the page is refreshed
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
