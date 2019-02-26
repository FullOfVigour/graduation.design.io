import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../actions'
import mutations from '../mutations'
import getters from '../getters'
Vue.use(Vuex)

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    studentId: '',
    userid: '',
    userName: '',
    companyName: '',
    isFromLogin: false,
    userIcon: '',
    roles: '',
    level: 0
  },
  actions,
  mutations,
  getters
}
