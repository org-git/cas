import Vue from "vue";
import Component from "vue-class-component";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.component("cas-nav-item", () => import("@/components/navitem.vue"));
Vue.component("cas-pagination", () => import("@/components/pagination.vue"));
Vue.component("cas-footer", () => import("@/components/footer.vue"));

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
  render: h => h(App)
}).$mount("#app");
