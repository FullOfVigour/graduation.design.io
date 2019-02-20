export function isEmptyObject(o) {
  if (o === undefined || o === null) {
    return true
  }
  for (let t in o) {
    if (o.hasOwnProperty(t)) {
      return false
    }
  }
  return true
}

export function isEmptyParam(param) {
  if (param === undefined || param === null) {
    return true
  } else {
    return false
  }
}

export function setPageCount(page, totalCount) {
  if (isEmptyObject(page)) {
    return
  } else {
    page.totalCount = totalCount
    page.pageCount = Math.ceil(totalCount / page.pageSize)
  }
}

/**
 * 判定某个对象的特定子属性是否存在
 * @param  {Object} object 查询的对象
 * @param  {String} attribute 查询的子属性名称
 * @return {Any,Boolean}   子属性存在时返回子属性本身的值，不存在时返回false
 */
export function isHaveField(object, attribute) {
  if (!object || object[attribute] === undefined) {
    return false
  }
  return object[attribute]
}

/**
 * 对对象或者数组进行深拷贝
 * @param  {Object} object 需要拷贝的对象
 * @return {Object}   返回对象数据
 */
export function deepClone(object) {
  return JSON.parse(JSON.stringify(object))
}
