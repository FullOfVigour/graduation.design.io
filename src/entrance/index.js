import Vue from 'vue'
/* eslint-disable no-unused-vars */
import base from './base'
import App from '../App'
import router from '../router/index'
import store from '../store/entrance/main'
window.router = router
window.store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
