<template>
  <div class="nav-menu">
    <el-scrollbar style="height:100%"
      wrapStyle="overflow-x: hidden;"
      tag="section"
      :noresize="false"
      :native="false">
      <el-menu style="padding-bottom:20%"
        :default-active="currentactive"
        class="nav-menu__wrapper"
        :class="{'menu__wrapper--isCollaps':isCollapse}"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-more"></i>
            <span slot="title">个人中心</span>
          </template>
          <el-menu-item index="1-1">我的信息</el-menu-item>
          <el-menu-item index="1-2">个人实习信息</el-menu-item>
          <el-menu-item index="1-3">实习周记</el-menu-item>
          <el-menu-item index="1-4">毕业综合作业信息</el-menu-item>
          <el-menu-item index="1-5">毕业综合实践任务</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-message"></i>
          <span slot="title">站内信箱</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-time"></i>
          <span slot="title">时政新闻</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-tickets"></i>
          <span slot="title">通知公告</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">调查问卷</span>
        </el-menu-item>

      </el-menu>
    </el-scrollbar>
    <!-- <el-button class="nav-menu__button"
      type="primary"
      icon="el-icon-menu"
      plain
      @click="isCollapse = !isCollapse"></el-button> -->
  </div>
</template>

<script>
export default {
  computed: {
    openIndex() {
      console.log('openIndex', this.isCollapse ? [] : [1])
      return this.isCollapse ? [] : [1]
    },
    closeIndex() {
      console.log('closeIndex', this.isCollapse ? 1 : [])
      return this.isCollapse ? 1 : []
    }
  },
  data() {
    return {
      isCollapse: false,
      currentactive: '6'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
.nav-menu {
  position: relative;
  left: 0;
  width: 240px;
  height: calc(100% - 84px);
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 5px 0px 12px 0 rgba(0, 0, 0, 0.1);
  // transform: translateY(-20px);
  z-index: 1;
  &__button {
    position: fixed;
    bottom: 0;
  }
}
</style>

