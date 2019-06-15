import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Component from "vue-class-component";
import * as Bootstrap from "bootstrap";

import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(Bootstrap);

Component.registerHooks([
  "beforeRouteEnter", // 进入路由之前
  "beforeRouteLeave", // 离开路由之前
  "beforeRouteUpdate"
]);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
