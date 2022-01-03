import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DayBookRouter from '@/modules/daybook/router'
import Zapatos from '@/modules/zapatos/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/daybook',
    
    //asi usaremos las ruta de los modulos para esta pagina
    ...DayBookRouter
  },
  {
    path: '/Zapatos',
    ...Zapatos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
