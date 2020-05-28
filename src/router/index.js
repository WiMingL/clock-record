import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Personal from '@/pages/Personal'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Forgot from '@/pages/Forgot'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: 'personal',
      component: Personal
    },{
      path: 'todolist',
      component: resolve => require(['@/pages/Todolist'], resolve)
    }]
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/register',
    name: 'Register',
    component: Register
  },{
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  }]
})
