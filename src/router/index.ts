import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes: Array<any> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/layout.vue"),
        redirect: "/dashboard",
        meta: { title: "首页" },
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("@/views/dashboard.vue"),
                meta: { title: "仪表盘" }
            },
            {
                path: "login",
                name: "login",
                component: () => import("@/views/login.vue"),
                meta: { title: "用户登录" }
            },
            {
                path: "console",
                name: "console",
                component: () => import("@/views/console/layout.vue"),
                redirect: "/console/dashboard",
                meta: { title: "控制台" },
                children: [
                    {
                        path: "dashboard",
                        name: "console-dashboard",
                        component: () => import("@/views/console/dashboard.vue"),
                        meta: { title: "仪表盘" }
                    }
                ]
            }
        ]
    }
];

const router: VueRouter = new VueRouter({
    routes
});

export default router;
