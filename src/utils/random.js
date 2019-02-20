/**
 * 生成英文数字混合的2-11位随机数
 * @param  {Number} length 返回的字符串长度,
 * @return {String}     随机字符串
 */
function minxinRandom (length) {
  return Math.random().toString(30).substr(2).slice(0, length)
}
/**
 * 生成英文随机字符串
 * @param  {Number} length 返回的字符串长度
 * @return {String}        字符范围在 '0123456789ABCDEF' 内得随机字符串
 */
function randomString (length) {
  length = length || 32
  let possible = '0123456789ABCDEF'
  let text = ''
  for (let i = 0; i < length; i++) {
    // 0~32的整数
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export {
  minxinRandom,
  randomString
}
