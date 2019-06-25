import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: resolve => require(["@/views/layout"], resolve),
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: resolve => require(["@/views/dashboard.vue"], resolve)
        },
        {
          path: "login",
          name: "login",
          component: resolve => require(["@/views/login.vue"], resolve)
        }
      ]
    },
    {
      path: "/hello",
      name: "hello",
      component: resolve => require(["@/components/HelloWorld.vue"], resolve)
    }
  ]
});
