// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ReportPage from '@/views/ReportPage.vue';

const routes = [
  {
    path: '/',
    name: 'ReportPage',
    component: ReportPage,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;