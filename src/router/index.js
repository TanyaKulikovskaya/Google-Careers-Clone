import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobResultsView from '@/views/JobResultsView.vue'
import JobView from '@/views/JobView.vue'
import TeamsView from '@/views/TeamsView.vue'
import LocationsView from '@/views/LocationsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/job/results',
    name: 'JobResults',
    component: JobResultsView,
  },
  {
    path: '/job/results/:id',
    name: 'Job',
    component: JobView,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: LocationsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  },
})

export default router
