import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue' // Or use lazy loading later

const routes = [
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    // Example of lazy loading (recommended for larger apps):
    // component: () => import('../views/AboutView.vue')
  },
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Uses the HTML5 history mode.
  // import.meta.env.BASE_URL is typically '/'
  // or your configured publicPath.
  routes, // short for `routes: routes`
})

export default router
