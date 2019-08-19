import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'msite',
      component: Msite
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
