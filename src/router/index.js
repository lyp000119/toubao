import Vue from 'vue'
import Router from 'vue-router'
import indexs from '@/main/home'
import find from '../main/find'
import myself from '../main/myself'
import child from '../main/section_child/components/index'
import details from '../main/find_components/details'
Vue.use(Router)
const routes = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: indexs,
    },
    {
      path: '/home',
      component: indexs
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself
    },
    {
      path: '/projectDetail/:id',
      name: 'ProjectDetail',
      component: child
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    }
  ]
})

export default routes;