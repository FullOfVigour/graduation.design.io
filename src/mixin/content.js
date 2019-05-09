export default {
  computed: {
    topbarHeight() {
      const doms = document.getElementsByClassName('topbar')
      return doms[0] ? doms[0].offsetHeight : 110
    },
    elTopbarHeight() {
      const doms = document.getElementsByClassName('el-tabs__header')
      return doms[0] ? doms[0].offsetHeight : 40
    },
    clientHeight() {
      return document.documentElement.clientHeight
    },
    tabContentHeight() {
      // 减31 是因为 外层上下有padding 15px 并且 elTopbar 少了1px
      return this.clientHeight - 31
    },
    iframeHeight() {
      return this.clientHeight - this.topbarHeight - this.elTopbarHeight - 31
    }
  }
}
