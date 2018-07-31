import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/HomePage'
import Login from '@/page/Login'
import Post from '@/page/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post
    }
  ]
})
