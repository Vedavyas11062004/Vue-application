import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategeoryVeiw from '../views/CategoryVeiw.vue'
import Allposts from '../views/Allposts.vue'
import AuthorsVeiw from '../views/AuthorsVeiw.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategeoryVeiw
    },
    {
      path: '/author/:id',
      name: 'author',
      component: AuthorsVeiw
    },
    {
      path: '/allposts',
      name: 'allposts',
      component: Allposts
    }
  ]
})

export default router
