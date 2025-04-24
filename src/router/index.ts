import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CoachesView from '@/views/CoachesView.vue'
import RosterView from '@/views/RosterView.vue'
import EventsView from '@/views/EventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/roster', name: 'roster', component: RosterView },
    { path: '/coaches', name: 'coaches', component: CoachesView },
    { path: '/events', name: 'events', component: EventsView },
  ],
})

export default router
