<template>
  <div class="demo">
    <svg class="sidebar"
      viewBox="0 0 300 500">
      <path class="s-path"
        fill="#fff"
        d="M0,0 50,0 a0,250 0 1,1 0,500 L0,500" />
    </svg>
    <div class="sidebar-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import './sideBar.js'
export default {}
</script>

<style lang="scss" scoped>
$openSans: 'Open Sans', Helvetica, Arial, sans-serif;
$transTime: 200ms;
.demo {
  // position: relative;
  // width: 30rem;
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25rem;
  margin-left: -15rem;
  width: 30rem;
  // height: 50rem;
  // box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.3);
  & *:before,
  & *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  svg {
    overflow: visible;
  }
  .sidebar {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    &-content {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      // width: 20rem;
      width: 100%;
      height: 100%;
      padding-top: 1rem;
      opacity: 0;
      transition: opacity $transTime, z-index 0s 0s;
      background-color: #e9eaf3;
      overflow: hidden;

      &.active {
        z-index: 2;
        opacity: 1;
      }
    }
  }
  .s-path {
    cursor: grab;
  }
}
</style>

