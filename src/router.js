import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login'
import Home from './pages/home'
import allReceiver from './pages/home/children/allReceiver.vue'
import wuhanReceiver from './pages/home/children/wuhanReceiver.vue'
import Resigter from './pages/resigter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:'/home/allReceiver',
      children:[
        {
          path: 'allReceiver',
          name: 'allReceiver',
          component: allReceiver
        },
        {
          path: 'wuhanReceiver',
          name: 'wuhanReceiver',
          component: wuhanReceiver
        },
        
      ]
    },
    {
      path: '/resigter',
      name: 'resigter',
      component: Resigter
    },
    
   
  ]
})
