import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Alarm from '../components/Alarm.vue'
import Roller from '../components/Roller.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roller',
    name: 'Roller',
    component: Roller
  },
  {
    path: '/alarm',
    name: 'Alarm',
    component: Alarm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
