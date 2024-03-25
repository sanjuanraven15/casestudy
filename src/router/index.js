import { createRouter, createWebHistory } from 'vue-router'
import PriorityTasks from '../views/PriorityTasks.vue'

const routes = [
  {
    path: '/',
    name: 'priority',
    component: PriorityTasks
  },
  {
    path: '/pending',
    name: 'pending',
    component: () => import(/* webpackChunkName: "about" */ '../views/PendingTasks.vue')
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompletedTasks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
