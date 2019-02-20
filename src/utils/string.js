/**
 * 返回 store 的模块和操作的连接字符串
 * @param {String} module 模块名称
 * @param {String} target 连接在模块后的目标
 */
export const joinModule = (module, target) => `${module}/${target}`

/**
 * 将数字转化为大写字母并返回
 * @param {number} n 数字
 */
export const number2UppercaseLetter = n => String.fromCharCode(0x40 + 1 + n)

/**
 * 验证是否为手机号码
 * @param {String} phoneNumber
 * @returns {Boolean}
 */
export const isMobilePhone = phoneNumber =>
  /^(\+?0?86-?)?1[3456789]\d{9}$/.test(phoneNumber)

/**
 * 车牌号验证
 * @param {String} license
 * @returns {Boolean}
 */
export const isLicense = license =>
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(
    license
  )
