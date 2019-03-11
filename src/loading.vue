<template>
  <div class="loading-container">
    <div class="loading__tunnel">
      <tunnel></tunnel>
    </div>
    <transition enter-active-class="bounceInDown"
      leave-active-class="bounceOutRight"
      @enter="enter">
      <div class="loading__panel"
        v-if="isShow">
        <span class="loading__panel-title">Loading...</span>
        <span class="loading__panel-number">{{percent}}%</span>
      </div>
    </transition>
  </div>
</template>
<script>
import TWEEN from '@tweenjs/tween.js'
import tunnel from './components/tunnel'
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
  components: {
    tunnel
  },
  data() {
    return {
      count: 0,
      percent: 0,
      isShow: false
    }
  },
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
<style lang="scss" scoped>
.loading {
  &-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  &__tunnel {
    position: absolute;
  }
  &__panel {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    flex-wrap: wrap;
    &-title {
      display: block;
      font-size: 2em;
      font-weight: 700;
    }
    &-number {
      display: block;
      font-size: 1.2em;
    }
  }
}
</style>
