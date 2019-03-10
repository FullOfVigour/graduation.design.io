<template>
  <div class="page-container"
    style="text-align: center;">
    <div id="loading-panel"
      class="animated flash box">
      <transition enter-active-class="bounceInDown"
        leave-active-class="bounceOutRight"
        @enter="enter">
        <div v-if="isShow">
          <h1 :key="1"><strong>Loading...</strong></h1>
          <h2 :key="2"><strong>{{percent}}%</strong></h2>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import TWEEN from '@tweenjs/tween.js'
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
      percent: 0,
      isShow: false
    }
  },
  created() {},
  mounted() {
    this.isShow = true
  },
  methods: {
    tween(oldNumber, number) {
      const animate = () => {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningValue: oldNumber })
        .to({ tweeningValue: number }, 1000)
        .onUpdate(tween => {
          // console.log(number)
          this.percent = tween.tweeningValue.toFixed(0)
        })
        .start()
      // this.percent = num
      animate()
    },
    preload() {
      for (let i of imgs) {
        const image = new Image()
        image.src = i
        image.onload = () => {
          this.count++
          this.tween(this.percent, Math.floor((this.count / imgs.length) * 100))
        }
      }
    },
    enter(el, done) {
      setTimeout(() => {
        this.preload()
      }, 700)
    }
  },
  watch: {
    percent(val) {
      if (val === '100') {
        // 图片加载完成后跳转页面
        this.isShow = false
        setTimeout(() => {
          this.$emit('input', true)
        }, 500)
      }
    }
  }
}
</script>