import { createWebHistory, createRouter } from "vue-router";

import MainView from "./views/MainView.vue";
import OurBranchesView from "./views/OurBranchesView.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/branches", component: OurBranchesView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
