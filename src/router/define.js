import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = resolve =>
  require.ensure([], () => resolve(require('../modules/login/index.vue')), '')
const main = resolve =>
  require.ensure([], () => resolve(require('../modules/main/index.vue')), '')
export default {
  redirect: {
    path: '/',
    redirect: '/login'
  },
  login: {
    path: '/login',
    name: 'login',
    component: login,
    label: '登入页'
  },
  main: {
    path: '/main',
    name: 'main',
    component: main,
    label: '主页'
  }
}
