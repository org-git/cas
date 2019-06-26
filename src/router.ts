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
      meta: { title: "首页" },
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: resolve => require(["@/views/dashboard.vue"], resolve),
          meta: { title: "仪表盘" }
        },
        {
          path: "login",
          name: "login",
          component: resolve => require(["@/views/login.vue"], resolve),
          meta: { title: "用户登录" }
        }
      ]
    },
    {
      path: "/hello",
      name: "hello",
      component: resolve => require(["@/components/HelloWorld.vue"], resolve),
      meta: { title: "欢迎页" }
    }
  ]
});
