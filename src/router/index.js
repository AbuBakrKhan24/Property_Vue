import { createRouter, createWebHistory } from "vue-router";
import Landing_Page from "../views/Landing_Page.vue";

const routes = [
  {
    path: "/",
    name: "landing_page",
    component: Landing_Page,
  },
  {
    path: "/admin",
    name: "admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminView.vue"),
  },
  {
    path: "/properties",
    name: "properties",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PropertiesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
