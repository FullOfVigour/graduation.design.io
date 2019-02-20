/**
 * 检验image 对象的分辨率
 * @param {Image} img 传入image 对象
 * @param {Array} resolution 分辨率数组 [长度(width),宽度(height)]
 */
export function checkResolution(img, resolution) {
  if (!img || !img.src || resolution.length !== 2) {
    return false
  } else {
    return img.width === resolution[0] && img.height === resolution[1]
  }
}
