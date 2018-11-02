// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import '../../node_modules/element-ui/lib/theme-chalk/index.css'
import moment from 'moment'

Vue.use(ElementUI)

Vue.config.productionTip = false
// 设置全局语言
moment.locale('zh-cn')
