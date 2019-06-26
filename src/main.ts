import Vue from "vue";
import Component from "vue-class-component";
import BootstrapVue from "bootstrap-vue";
import VueI18n from "vue-i18n";

import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/locales/index";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueI18n);

/**
 * 路由跳转更新标题
 */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

Component.registerHooks([
  "beforeRouteEnter", // 进入路由之前
  "beforeRouteLeave", // 离开路由之前
  "beforeRouteUpdate"
]);

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount("#app");
