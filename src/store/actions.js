import { SET_BASE_DATA } from './mutation-types'

export default {
  // eslint-disable-next-line no-unused-vars
  initApp({ commit, dispatch, state }, baseData) {
    commit(SET_BASE_DATA, baseData)
    // document.title = baseData.companyName
    document.title = '浙邮院-综合实践管理平台'
    return ''
  }
}
