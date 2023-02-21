import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //默认首页
      path: '/',
      name: 'HelloWorld',
      component: home
    }
  ]
})
