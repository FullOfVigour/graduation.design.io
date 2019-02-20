// file 对象转 image 对象
export function fileToImage(file) {
  return new Promise((resolve, reject) => {
    const read = new FileReader()
    read.readAsDataURL(file)
    read.onload = (...url) => {
      const img = new Image()
      img.src = url[0].target.result
      img.onload = (...param) => {
        resolve(param[0].path[0])
      }
      img.onerror = (...error) => {
        console.log('图片读取失败')
        reject(error)
      }
    }
    read.onerror = (...res) => {
      console.log('文件读取失败')
      reject(res)
    }
  })
}
