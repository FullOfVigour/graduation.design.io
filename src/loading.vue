<template>
  <div class="page-container"
    style="text-align: center;">
    <div id="loading-panel">
      <h1><strong>Loading...</strong></h1>
      <h2><strong>{{percent}}</strong></h2>
    </div>
  </div>
</template>
<script>
// 需要提前加载的图片列表
const imgs = [
  'static/login/login-bg-01.jpg',
  'static/login/login-bg-02.jpg',
  'static/login/login-bg-03.jpg'
]
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      count: 0,
      percent: ''
    }
  },
  mounted() {
    this.preload()
  },
  methods: {
    preload() {
      for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          this.count++
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor((this.count / imgs.length) * 100)
          this.percent = `${percentNum}%`
        }
      }
    }
  },
  watch: {
    count(val) {
      // console.log(val)
      if (val === imgs.length) {
        // 图片加载完成后跳转页面
        this.$emit('input', true)
      }
    }
  }
}
</script>