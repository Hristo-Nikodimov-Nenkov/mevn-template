import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import homeRoutes from './home';
import fallback from "./fallback";

const routes = [
    ...homeRoutes,
    fallback
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
