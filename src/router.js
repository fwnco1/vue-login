import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login'
import Home from './pages/home'
import allReceiver from './pages/home/children/allReceiver.vue'
import wuhanReceiver from './pages/home/children/wuhanReceiver.vue'
import Resigter from './pages/resigter'

Vue.use(Router)

let router = new Router({
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

// 导航守卫效果看起来很像使用watch监视路由的变化
// 但是区别在于: watch是监视路由的变化, 无法阻止路由的导航
// 导航守卫是专门用来进行拦截导航或者新建导航等操作
router.beforeEach((to, from, next) => {
  // ...
  //  console.log(to, from)
   let token = localStorage.getItem('token') || ''
   // 拦截已登录的状态
   if (token && to.path=='/login') {
      next('/home')
   }
   // 拦截未登录的状态
  // 判断token是否存在
  // 存在表示已登录
  // 判断如果用户登录了就正常导航
  // 登录页面也不能进行拦截, 应当放行
  if (token || to.path=='/login' || to.path=='/resigter') {
      next()
  }else {//用户没有登陆
      next('/')
  }
  // 一定要调用next函数进行路由传递
})

export default  router
