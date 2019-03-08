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
  created() {
    this.preload()
  },
  methods: {
    preload() {
      let image = new Image()
      console.log(imgs[this.count])
      image.onload = () => {
        let percentNum = Math.floor((this.count / imgs.length) * 100)
        this.percent = `${percentNum}%`
        this.count++
        console.log(this.count)
      }
      image.src = imgs[this.count]
      console.log('ss', this.count)
      if (this.count === imgs.length) {
        console.log(this.count)
        this.$emit('input', true)
      }
    }
  },
  watch: {
    count(val) {
      // console.log(val)
      if (val === imgs.length) {
        // 图片加载完成后跳转页面
      }
    }
  }
}
</script>