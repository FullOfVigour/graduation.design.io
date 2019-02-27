<template>
  <div class="card__warpper">
    <div class="card__content">
      <div class="card__header">
        <div class="header__action-row header__action-row--left">
          <el-button icon="el-icon-d-arrow-left"
            class="header__action-button"
            size="mini"
            circle
            @click="onChangeTimeClick(0)"></el-button>
          <el-button icon="el-icon-arrow-left"
            class="header__action-button"
            size="mini"
            circle
            @click="onChangeTimeClick(1)"></el-button>
        </div>
        <span class="header__span">{{currentTime}}</span>
        <div class="header__action-row header__action-row--right">
          <el-button icon="el-icon-arrow-right"
            class="header__action-button"
            size="mini"
            circle
            @click="onChangeTimeClick(2)"></el-button>
          <el-button icon="el-icon-d-arrow-right"
            class="header__action-button"
            size="mini"
            circle
            @click="onChangeTimeClick(3)"></el-button>
        </div>
      </div>
      <div class="card__body">
        <calendar-body ref="calendarBody"
          :selectTime="selectTime"
          :currentTime="currentTime"
          :data="data"></calendar-body>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import calendarBody from './calendarBody'
export default {
  props: {
    data: Array
  },
  components: {
    calendarBody
  },
  computed: {
    currentTime() {
      return `${this.selectTime.year} 年 ${this.selectTime.month} 月`
    }
  },
  created() {},
  data() {
    return {
      selectTime: {
        year: moment().year(),
        month: moment().month() + 1
      }
    }
  },
  methods: {
    // 日历顶部按钮点击事件,type:0--上一年,1--上一月,2--下一月,3--下一年
    onChangeTimeClick(type) {
      switch (type) {
        case 0:
          this.selectTime.year -= 1
          break
        case 1:
          if (this.selectTime.month === 1) {
            this.selectTime.year -= 1
            this.selectTime.month = 12
          } else this.selectTime.month -= 1
          break
        case 2:
          if (this.selectTime.month === 12) {
            this.selectTime.year += 1
            this.selectTime.month = 1
          } else this.selectTime.month += 1
          break
        case 3:
          this.selectTime.year += 1
          break

        default:
          break
      }
    }
  },
  watch: {
    currentTime() {
      this.$refs.calendarBody.init()
      this.$emit('change', this.selectTime)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__warpper {
    display: block;
    color: #606266;
  }
  &__content {
    width: 800px;
    border: 1px solid #ebeef5;
    color: #303133;
    background-color: #fff;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &__header {
    position: relative;
    // border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    height: 45px;
    .header {
      &__action {
        &-row {
          position: absolute;
          top: 0;
          bottom: 0;
          height: 28px;
          margin: auto;
          &--left {
            left: 10px;
          }
          &--right {
            right: 10px;
          }
        }
      }
      &__span {
        position: absolute;
        width: 300px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  &__body {
    height: 100%;
    padding: 20px;
  }
}
</style>

