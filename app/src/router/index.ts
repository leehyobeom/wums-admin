import { createWebHistory, createRouter } from "vue-router";
//import Home from "@/views/DashBoard.vue";
import Home from "@/views/HomeView.vue";
import Monitor from "@/views/Monitor.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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