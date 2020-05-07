import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Addcontacts from '../views/Addcontacts.vue'
// import navbar from '../views/Nav.vue'
import Toilets from '../views/Toilets.vue'
import ToiletsView from '../views/ToiletsView.vue'
import AddToilets from '../views/AddToilets.vue'

import Tickets from '../views/Tickets.vue'
import TicketsView from '../views/TicketsView.vue'
import ErrorPage from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideNavigation: true
    }
  },
  {
    path: '/addtoilets',
    name: 'AddToilets',
    component: AddToilets
  },
  {
    path: '/toilets',
    name: 'Toilets',
    component: Toilets
  },
  {
    path: '/toiletview/:id',
    name: 'ToiletsView',
    props: true,
    component: ToiletsView
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets,
    props: true
  },
  {
    path: '/ticketsview/:waters',
    name: 'TicketsView',
    props: true,
    component: TicketsView
  },
  {
    path: "*",
    component: ErrorPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Addcontacts',
    component: Addcontacts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
