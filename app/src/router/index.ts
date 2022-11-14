import { createWebHistory, createRouter } from "vue-router";
import Dashboar from "@/views/DashboardView.vue";
import Monitor from "@/views/Monitor.vue";

const routes = [
  {
    path: "/",
    name: "Dashboar",
    component: Dashboar,
  },
  {
    path: "/monitor",
    name: "Monitor",
    component: Monitor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;