<template>
  <div class="main">
    <top-bar></top-bar>
    <nav-menu></nav-menu>
    <div class="content">
      <el-scrollbar style="height:100%"
        wrapStyle="overflow-x: hidden;"
        tag="section"
        :noresize="false"
        :native="false">
        <component :is="activeName"></component>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import topBar from '../../components/topBar'
import navMenu from '../../components/navMenu'
import home from './home/index'
import { mapActions } from 'vuex'
import { getBaseData } from '../../storage/localStorage'
export default {
  components: { topBar, navMenu, home },
  created() {
    this.initApp(getBaseData()).then(() => {})
  },
  data() {
    return {
      value1: '',
      list: [],
      activeName: 'home'
    }
  },
  methods: {
    ...mapActions(['initApp'])
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  position: absolute;
  left: 240px;
  right: 0;
  top: 84px;
  bottom: 0;
  background-color: #fff;
}
</style>

