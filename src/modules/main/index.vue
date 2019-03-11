<template>
  <div>
    <top-bar></top-bar>

  </div>
</template>

<script>
import topBar from '../../components/topBar'
import { mapActions } from 'vuex'
import { getBaseData } from '../../storage/localStorage'
export default {
  components: { topBar },
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

