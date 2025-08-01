import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout/index.vue'

// 公共路由
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
    hidden: true,
  },
  {
    path: "",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        component: () => import("@/views/index.vue"),
        name: "Index",
        meta: { title: "首页", icon: "dashboard", affix: true },
      },
    ],
  },
  {
    path: "/401",
    component: () => import("@/views/error/401.vue"),
    hidden: true,
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404.vue"),
    hidden: true,
  },
];

export const dynamicRoutes = []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
