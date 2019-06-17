import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Component from "vue-class-component";
import BootstrapVue from "bootstrap-vue";

import "./registerServiceWorker";
import "@/assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

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
