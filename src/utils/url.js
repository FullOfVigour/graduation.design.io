import router from '../router/jyjh'
const baseUrl = `${window.location.origin}/weixt/base/func`
export const openVue1Url = url => {
  window.open(baseUrl + `/90514/#!${url}`)
}
export const openVue2Url = url => {
  window.open(baseUrl + `/90515/#${url}`)
}
/**
 * 判断当前路由 name 是否发生变化
 * @param  {String} name 比较的路由 name
 * @return {Boolean}   返回是或否
 */
export function isCurrentRouter(name) {
  return router.currentRoute.name === name
}

export function downTemplate(url) {
  var iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = "javascript: '<script>location.href=\"" + url + "\"</script>'"
  document.getElementsByTagName('body')[0].appendChild(iframe)
}
