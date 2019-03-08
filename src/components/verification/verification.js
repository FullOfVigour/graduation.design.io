const drawWord = (canvas, context, num) => {
  let sCode = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'W',
    'X',
    'Y',
    'Z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
  ]
  let str = []
  for (let i = 0; i < num; i++) {
    str.push(sCode[parseInt(Math.random() * sCode.length)])
    // 产生一个随机弧度
    let deg = Math.random() - 0.5
    let x = i * 30 + Math.random() * 25
    let y = 50
    context.translate(x, y)
    context.rotate(deg)
    context.fillStyle = randomColor()
    context.fillText(str[i], x, y)
    context.rotate(-deg)
    context.translate(-x, -y)
  }
  return str
}

const drawLine = (canvas, context, num) => {
  for (let i = 0; i < num; i++) {
    context.moveTo(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height)
    )
    // 随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
    context.lineTo(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height)
    )
    // 随机线宽
    context.lineWidth = Math.floor(Math.random() * 4) + 2
    // 随机线描边属性
    context.strokeStyle = randomColor()
    // 描边，即起点描到终点
    context.stroke()
  }
}

// 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
const drawPoint = (canvas, context, num) => {
  for (let i = 0; i < num; i++) {
    context.fillStyle = randomColor()
    context.beginPath()
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height
    let r = Math.random() * 6
    context.arc(
      x,
      y,
      r,
      Math.random() * 2 * Math.PI,
      Math.random() * 2 * Math.PI
    )
    context.fill()
  }
}

// 得到随机的颜色值
const randomColor = () => {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

export const drawCode = idName => {
  // 获得画布元素
  let canvas = document.getElementById(idName)
  // 获得2维绘图的上下文
  const context = canvas.getContext('2d')
  // 画布填充色
  context.fillStyle = 'cornflowerblue'
  // 清空画布
  context.fillRect(0, 0, canvas.width, canvas.height)

  // 设置字体
  context.font = '100px Arial'

  let lineNum = Math.random() * 4 + 4
  drawLine(canvas, context, lineNum)

  let pointNum = Math.random() * 10 + 20
  drawPoint(canvas, context, pointNum)

  let wordNum = 4
  let str = drawWord(canvas, context, wordNum)
  return JSON.parse(str)
}
