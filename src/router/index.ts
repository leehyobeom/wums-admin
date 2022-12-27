import { createWebHistory, createRouter } from "vue-router";
import Dashboar from "@/views/DashboardView.vue";
import UserMonitor from "@/views/UserMonitorView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboar",
    component: Dashboar,
  },
  {
    path: "/monitor/:id",
    name: "UserMonitor",
    component: UserMonitor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;