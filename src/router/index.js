import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import City from '@/page/city/City'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/city',
      component:City
    }
  ]
})
