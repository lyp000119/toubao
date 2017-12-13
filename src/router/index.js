import Vue from 'vue'
import Router from 'vue-router'
import indexs from '@/main/home'
import find from '../main/find'
import myself from '../main/myself'
import child from '../main/section_child/components/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: indexs
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
      path: '/projectDetail',
      name: 'name',
      component: child
    }
  ]
})
