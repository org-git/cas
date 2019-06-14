import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: resolve => require(["@/views/layout"], resolve),
      children: [
        {
          path: "about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
          path: "/login",
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
