import moment from 'moment'
/**
 * 设置 cookie
 * @param {Object} param 需要设置的值
 */
const set = ({ key, value = '', domain, expires, path }) => {
  if (!key) return Promise.reject(new Error('key is invalid'))
  document.cookie = `${key}=${value};domain=${domain};expires=${expires};path=${path};`
  return Promise.resolve()
}

/**
 * 根据 key 获取 cookie
 */
const get = key => {
  if (!key) return false
  const cookieList = document.cookie.split(';')
  for (let cookie of cookieList) {
    const [cookieKey, value] = cookie.split('=')
    // console.log('cookieKey=' + cookieKey + 'key=' + key)
    if (cookieKey.trim() === key) {
      return value
    }
  }
  return ''
}

/**
 * 根据 key 查询是否有该 cookie
 * @param {String} key cookie 的键值
 */
const includes = key => {
  if (!key) return false
  const cookieList = document.cookie.split(';')
  // console.log('cookieList=' + cookieList)
  // console.log('cookieList=' + JSON.stringify(cookieList))
  for (let cookie of cookieList) {
    const [cookieKey] = cookie.split('=')
    // console.log('cookieKey=' + cookieKey + 'key=' + key)
    if (cookieKey.trim() === key) {
      return true
    }
  }
  return false
}
// 删除的cookie的域和路径，Cookie域和路径要一样才能被覆盖。否则无法清除
const clear = ({ key, domain, path }) => {
  set({
    key,
    domain,
    path,
    expires: moment()
      .subtract(1, 'days')
      .toDate()
      .toUTCString()
  })
}

export { set, get, includes, clear }
