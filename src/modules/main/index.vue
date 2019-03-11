<template>
  <div>
    <top-bar></top-bar>
    <side-bar class="side-bar">
      <slot>123</slot>
    </side-bar>
  </div>
</template>

<script>
import topBar from '../../components/topBar'
import sideBar from '../../components/sideBar.vue'
import { mapActions } from 'vuex'
import { getBaseData } from '../../storage/localStorage'
export default {
  components: { topBar, sideBar },
  created() {
    this.initApp(getBaseData()).then(() => {})
  },
  data() {
    return { value1: '', list: [] }
  },
  methods: {
    ...mapActions(['initApp'])
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
}
</style>

