import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
