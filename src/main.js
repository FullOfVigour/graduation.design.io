import Vue from 'vue'
/* eslint-disable no-unused-vars */
import base from './entrance/base'
import App from './App.vue'
import router from './router/index'
import store from './store/entrance/main'

Vue.config.productionTip = false

window.router = router
window.store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
