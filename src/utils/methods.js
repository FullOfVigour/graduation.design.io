// 将字符串内的数字转化为文字 如果是转化为星期几 则 传入 'weekday'
export function convertToChinese(num, type) {
  let N = []
  if (type === 'weekday') {
    N = ['零', '一', '二', '三', '四', '五', '六', '日']
  } else {
    N = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  }

  let str = num.toString()
  let len = str.length
  let cNum = []
  for (let i = 0; i < len; i++) {
    cNum.push(N[str.charAt(i)])
  }
  return cNum.join('')
}
// 判断字符是否为空
export function isNullOrEmpty(str) {
  if (str === undefined || str === null || str === '') {
    return true
  } else {
    return false
  }
}

export function convertBase64String(base64String) {
  return 'base64imagestart' + base64String + 'base64imageend'
}

export function parseHref() {
  let urls = window.location.href.split('//')
  let httpstr = urls[0]
  let addressStrs = urls[1].split('/')
  let result = httpstr + '//'
  for (let index = 0; index < addressStrs.length; index++) {
    const element = addressStrs[index]
    result += element + '/'
    if (element.endsWith('#')) {
      break
    }
  }
  return result
}

export function parseHrefNoEnd() {
  let urls = window.location.href.split('//')
  let httpstr = urls[0]
  let addressStrs = urls[1].split('/')
  let result = httpstr + '//'
  for (let index = 0; index < addressStrs.length; index++) {
    const element = addressStrs[index]
    if (element.endsWith('#')) {
      result += element
      break
    } else {
      result += element + '/'
    }
  }
  return result
}
// 兼容多页面应用跳转
export function processApi(api) {
  let result = api.replace('survey/#/', '')
  result = result.replace('portal/#/', '')
  result = result.replace('assess/#/', '')
  result = result.replace('webpayment/#/', '')
  result = result.replace('quality/#/', '')
  result = result.replace('attendance/#/', '')
  result = result.replace('questionnaire/#/', '')
  result = result.replace('elective/#/', '')
  return result
}
