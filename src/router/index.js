import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/Home.vue'
import Alarm from '../components/alarm/Alarm.vue'
import RollverOverview from '../components/roller/RollverOverview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roller',
    name: 'Roller',
    component: RollverOverview
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
