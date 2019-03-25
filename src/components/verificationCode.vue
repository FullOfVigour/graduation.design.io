<template>
  <canvas id="canvas"
    :width="width"
    :height="height"
    @click="drawCode('canvas')"></canvas>
</template>

<script>
const sCode = [
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
export default {
  name: '',
  props: {
    width: {
      type: Number,
      default: 120
    },
    height: {
      type: Number,
      default: 60
    },
    wordNum: {
      type: Number,
      default: 4
    },
    fontSize: {
      type: Number,
      default: 40
    },
    fontStyle: {
      type: String,
      default: 'Arial'
    }
  },
  data() {
    return {
      time: 0
    }
  },
  mounted() {
    this.drawCode('canvas')
  },
  methods: {
    drawWord(canvas, context, num) {
      // 设置字体
      context.font = this.fontSize + 'px ' + this.fontStyle
      let str = ''
      let x = []
      let i = 0
      let s = setInterval(() => {
        if (i === 4) {
          clearInterval(s)
        } else {
          i++
        }
      }, 1000)
      for (let i = 0; i < num; i++) {
        str += sCode[parseInt(Math.random() * sCode.length)]
        // 产生一个随机弧度
        let deg =
          (Math.PI / 180) * Math.random() * 5 * (Math.random() < 0.5 ? 1 : -1)
        let k = 0
        do {
          x[i] = i * (this.width / num) + (Math.random() * this.fontSize) / 2
          k++
        } while (
          (x[i] + this.fontSize > this.width ||
            x[i] < this.fontSize ||
            x[i] < (x[i - 1] || 0) + this.fontSize) &&
          k < 10
        )

        let y = this.height / 2

        context.rotate(deg)
        context.fillStyle = this.randomColor()
        context.textBaseline = 'center'
        context.fillText(str[i], x[i], y)
        context.rotate(-deg)
      }
      return str
    },

    drawLine(canvas, context, num) {
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
        context.lineWidth =
          Math.floor(Math.random() * 4) + this.height / this.fontSize
        // 随机线描边属性
        context.strokeStyle = this.randomColor()
        // 描边，即起点描到终点
        context.stroke()
      }
    },

    // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
    drawPoint(canvas, context, num) {
      for (let i = 0; i < num; i++) {
        context.fillStyle = this.randomColor()
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        let r = Math.random() * 6
        context.beginPath()
        context.arc(
          x,
          y,
          r,
          Math.random() * 2 * Math.PI,
          Math.random() * 2 * Math.PI
        )
        context.fill()
      }
    },
    // 得到随机的颜色值
    randomColor() {
      var r = Math.floor(Math.random() * 256)
      var g = Math.floor(Math.random() * 256)
      var b = Math.floor(Math.random() * 256)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },

    drawCode(idName) {
      this.time = 0
      // 获得画布元素
      let canvas = document.getElementById(idName)
      // 获得2维绘图的上下文
      const context = canvas.getContext('2d')
      // 画布填充色
      context.fillStyle = '#fff'
      // 清空画布
      context.fillRect(0, 0, canvas.width, canvas.height)

      let str = this.drawWord(canvas, context, this.wordNum)

      let lineNum = Math.random() * 4 + 2
      this.drawLine(canvas, context, lineNum)

      let pointNum = Math.random() * 10 + 20
      this.drawPoint(canvas, context, pointNum)
      this.$emit('change', str)
    }
  }
}
</script>

<style lang="scss" scoped>
#canvas {
  cursor: pointer;
  border-radius: 6px;
}
</style>

