import Vue from 'vue'
import Router from 'vue-router'
import login from '../modules/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
