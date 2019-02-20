/**
 * 校验经纬度格式
 * @param  {String} coords 经纬度
 * @return {Boolean} true or false
 */
function checkCoords (coords) {
  let list = coords.split(',')
  let longitude = /^-?((0|1?[0-7]?[0-9]?)(([.][0-9]{3,6})?)|180(([.][0]{3,6})?))$/
  let latitude = /^-?((0|[1-8]?[0-9]?)(([.][0-9]{3,6})?)|90(([.][0]{3,6})?))$/
  return longitude.test(list[0]) && (latitude.test(list[1]))
}
export {
  checkCoords
}
