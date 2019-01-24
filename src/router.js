import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/single/:text',
      name: 'single',
      component: () => import(/* webpackChunkName: "about" */ './views/Single.vue')
    },
    {
      path: '/hierarchy/:text',
      name: 'hierarchy',
      component: () => import(/* webpackChunkName: "about" */ './views/Hierarchy.vue')
    },
    {
      path: '/eventbus/:text',
      name: 'eventbus',
      component: () => import(/* webpackChunkName: "about" */ './views/Eventbus.vue')
    },
    {
      path: '/store/:text',
      name: 'store',
      component: () => import(/* webpackChunkName: "about" */ './views/Store.vue')
    }
  ]
})
