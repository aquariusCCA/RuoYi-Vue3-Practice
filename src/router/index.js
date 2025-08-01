import { createRouter, createWebHistory } from "vue-router";

// 公共路由
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
    hidden: true,
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
