import { SET_BASE_DATA } from './mutation-types'

export default {
  initApp({ commit, dispatch, state }, baseData) {
    commit(SET_BASE_DATA, baseData)
    // document.title = baseData.companyName
    document.title = '浙邮院-综合实践管理平台'
    return ''
  }
}
