// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import '../../node_modules/element-ui/lib/theme-chalk/index.css'
import moment from 'moment'

import callApi from '../http/api'

// import 'vue2-animate/dist/vue2-animate.min.css'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(ElementUI)
Vue.use(VueParticles)

Vue.prototype.$callApi = callApi

Vue.config.productionTip = false
// 设置全局语言
moment.locale('zh-cn')
