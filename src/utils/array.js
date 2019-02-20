export function isEmptyArray(a) {
  if (
    a === undefined ||
    a === null ||
    !(a instanceof Array) ||
    a.length === 0
  ) {
    return true
  }
  return false
}

export function listItemLabelValue(list, labelName, valueName) {
  if (!isEmptyArray(list)) {
    let newList = []
    for (var i = 0; i < list.length; i++) {
      let item = list[i]
      let newItem = { value: null, label: null }
      newItem.value = item[valueName]
      newItem.label = item[labelName]
      newList.push(newItem)
    }
    return newList
  } else {
    return []
  }
}

export function listItemLabelUrl(list, labelName, url) {
  if (!isEmptyArray(list)) {
    let newList = []
    for (var i = 0; i < list.length; i++) {
      let item = list[i]
      let newItem = {}
      newItem.url = item[url]
      newItem.label = item[labelName]
      newList.push(newItem)
    }
    return newList
  } else {
    return []
  }
}

/**
 * 将根据设置的 length 将一个数组拆分成多个数组。
 * 返回的结果是单个数组，包含拆分后生成的数组。
 * @param  {Array} data   数据源
 * @param  {Number} length 拆分间隔
 * @return {Array}        拆分结果
 */
export function split(data, length) {
  let resultList = []
  if (Array.isArray(data)) {
    for (var i = 0, len = data.length; i < len; i += length) {
      resultList.push(data.slice(i, i + length))
    }
    resultList.forEach(item => {})
  }
  return resultList
}

function getAllKey(list, key) {
  const result = []
  list.forEach(item => {
    result.push(item[key])
  })
  return result.join(',')
}

/**
 * 为下拉框数组添加全部选择的选项
 * @param {Array} list 需要修改的下拉框数组
 * @param {Object} option 要添加进数组的选项
 * @param {Strign} key 需要累加的key
 */
export function listAddAllOption(list, option, key) {
  if (list.length <= 1) {
    return list
  }

  option[key] = getAllKey(list, key)
  list.unshift(option)
  return list
}
/**
 *按下标交换数组项
 * @param {Array} ary 需要修改的数组
 * @param {Number} indexFirst 第一个下标
 * @param {Number} indexLast  第二个下标
 */
export function arrayItemSwap(ary, indexFirst, indexLast) {
  const flag = ary.splice(indexLast, 1, ary[indexFirst])
  ary.splice(indexFirst, 1, flag[0])
  return ary
}

/**
 * 判断数组内的数组项是否有重复,如果传key则判断对
 * 应key的value值是否有重复,不支持对比引用类型
 * @param {Array} list 需要判断的数组
 * @param {String} keyName 需要对比的键名
 * @return {Boolean}
 */
export function isSameValue(list, key) {
  const length = list.length
  const valueList = []
  for (const item of list) {
    valueList.push(item[key] || item)
  }
  const newLength = new Set(valueList).size
  return length !== newLength
}

/**
 * 判断数组中的对象是否有不合法的值
 * @param {Array} list 需要判断的数组
 * @return {Boolean}
 */
export function isHaveIllegalValue(list) {
  for (let item in list) {
    for (let key in item) {
      if (item[key] === undefined || item[key] === null || item[key] === '') {
        return true
      }
    }
  }
  return false
}
/**
 * 将一个Object Array中指定字段提取成一个新的数组
 * @param {Array} list Object Array
 * @param {String} param 指定字段
 */
export function generateListFromParam(list, param) {
  if (!list || !Array.isArray(list || !param)) return []

  let result = []
  list.forEach(item => {
    result.push(item[param])
  })
  return result
}

/**
 * 在 objectList 中查找指定字段与给定值相同的对象
 * @param  { Array } objectList 被查找的 List
 * @param  { String } field 对应的字段名
 * @param  { String, Number} value 给定值 仅支持String Number
 * @return { Object} 被查询到的对象,未找到返回 undefined
 */
export function findAssignItem(objectList, field, value) {
  return objectList.find(item => {
    return item[field] === value
  })
}
