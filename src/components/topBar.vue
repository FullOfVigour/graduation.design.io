<template>
  <div class="top__bar">
    <div class="top__bar-logo">
      <img class="logo__img"
        src="../assets/img/logo.gif">
    </div>
    <div class="top__bar-information">
      <span class="information__time">{{time}} 您好，{{studentId}}同学</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['studentId']),
    time() {
      return moment(1549555199999).format('YYYY年MMMD日dddd')
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.top__bar {
  width: 100%;
  padding: 10px 10px;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: none;
  &-logo {
    height: 64px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .logo {
    &__img {
      height: 60px;
    }
    &__span {
      color: #2c5590;
      font-size: 36px;
      font-weight: 600;
    }
  }

  &-information {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
  .information {
    &__time {
      font-size: 14px;
    }
  }
}
</style>

