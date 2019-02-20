import { SET_BASE_DATA, SET_IS_FROM_LOGIN } from './mutation-types'

export default {
  [SET_BASE_DATA](state, { compid, userid, userName, companyName, level }) {
    state.compid = compid
    state.userid = userid
    state.userName = userName
    state.companyName = companyName
    state.level = level
    state.userIcon = 'http://77g3wr.com2.z0.glb.qiniucdn.com/boyteacher.jpg'
  },
  [SET_IS_FROM_LOGIN](state, isFromLogin) {
    state.isFromLogin = isFromLogin
  }
}
