<template>
  <div class="home">
    <div class="home__item">
      <bar-charts title="系统访问信息统计"
        name=""
        :xAxisList="xAxisList"
        :seriesValueList="seriesValueList"></bar-charts>
    </div>
    <div class="home__item">
      <bar-charts title="系统访问信息统计"
        name=""
        :xAxisList="xAxisList"
        :seriesValueList="seriesValueList"></bar-charts>
    </div>
    <div class="home__item">
      <bar-charts title="系统访问信息统计"
        name=""
        :xAxisList="xAxisList"
        :seriesValueList="seriesValueList"></bar-charts>
    </div>
    <div class="home__item">
      <bar-charts title="系统访问信息统计"
        name=""
        :xAxisList="xAxisList"
        :seriesValueList="seriesValueList"></bar-charts>
    </div>
  </div>
</template>

<script>
import barCharts from './components/chart/index'
export default {
  components: {
    barCharts
  },
  data() {
    return {
      xAxisList: [
        '累计访问人数',
        '累计学生访问人数',
        '累计教师访问人数',
        '累计实习周报',
        '累计毕业综合实践任务',
        '累计师生联系记录'
      ],
      seriesValueList: [851192, 775363, 75774, 371471, 4008, 114455]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 20px 20px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-radius: 6px;
  filter: (2px);
  background-image: url('https://static.weixiaotong.com.cn/static/vue/develop/survey/img/background.2ef7f9b.png');
  &__item {
    width: 49%;
    height: 500px;
  }
}
.home__item:nth-child(-n + 2) {
  margin-bottom: 20px;
}
</style>

