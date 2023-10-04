import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/hot",
    name: "Hot",
    component: () => import("../views/Hot.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
