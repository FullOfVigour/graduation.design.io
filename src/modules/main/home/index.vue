<template>
  <div class="home">
    <div class="home__item">
      <system-visits-charts name="累计访问信息统计"
        :studentVisits="studentVisits"
        :teacherVisits="teacherVisits"></system-visits-charts>
    </div>
    <div class="home__item">
      <system-visits-charts name="24小时访问信息统计"
        :studentVisits="studentVisits"
        :teacherVisits="teacherVisits"></system-visits-charts>
    </div>
    <!-- <div class="home__item">
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
    </div> -->
  </div>
</template>

<script>
import systemVisitsCharts from './components/chart/systemVisits'
export default {
  components: {
    systemVisitsCharts
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
      studentVisits: 775709,
      teacherVisits: 75821
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
  flex-wrap: wrap;
  box-sizing: border-box;
  border-radius: 6px;
  // background-image: url('https://static.weixiaotong.com.cn/static/vue/develop/survey/img/background.2ef7f9b.png');
  &__item {
    width: 100%;
    height: 540px;
    margin-bottom: 10px;
  }
}
</style>

