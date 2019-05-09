<template>
  <div class="echart__wrapper">
    <i-echart :option="option"
      ref="echart"
      :styles="styles"
      :theme="theme"
      :group="group"
      :initOpts="initOpts"
      :notMerge="notMerge"
      :lazyUpdate="lazyUpdate"
      :loading="loading"
      :loadingOpts="loadingOpts"
      :resizable="resizable"
      @click="onClick"
      @legendselectchanged="onLegendseLectChanged"></i-echart>
  </div>
</template>

<script>
import IEchart from 'vue-echarts-v3/src/lite.js'
export default {
  props: {
    option: Object,

    styles: {
      type: Object,
      required: false,
      default: () => ({
        width: '100%',
        height: '100%'
      })
    },
    theme: {
      type: [String, Object],
      required: false
    },
    group: {
      type: String,
      required: false
    },
    initOpts: {
      type: Object,
      required: false
    },
    notMerge: {
      type: Boolean,
      required: false,
      default: false
    },
    lazyUpdate: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    loadingOpts: {
      type: Object,
      required: false
    },
    resizable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    IEchart
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.reSizeEchart)
    })
  },
  methods: {
    reSizeEchart() {
      this.$refs.echart && this.$refs.echart.resize()
    },
    onClick(...arg) {
      this.$emit('click', ...arg)
    },
    onLegendseLectChanged(...arg) {
      this.$emit('legendselectchanged', ...arg)
    }
  }
}
</script>

<style lang="scss" scoped>
.echart {
  &__wrapper {
    width: 100%;
    height: 100%;
  }
}
</style>
