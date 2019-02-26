<template>
  <div class="calendar__body">
    <table cellspacing="0"
      cellpadding="0"
      class="calendar__table">
      <tbody>
        <tr>
          <th v-for="item in weekList"
            :key="item.key"
            class="calendar__table-title">{{item[titleType]}}</th>
        </tr>
        <tr v-for="(item,i) in dateList"
          :key="i">
          <th v-for="(k,t) in item"
            :key="t">{{k}}</th>
        </tr>
      </tbody>
    </table>
    <!-- {{dateList}} -->
    <!-- <div class="calendar__top">
      <div v-for="item in weekList"
        :key="item.key"
        class="calendar__top-item">
        <span v-show="isShow.nameCh">{{item.nameCh}}</span>
        <span v-show="isShow.nameEn">{{item.nameEn}}</span>
        <span v-show="isShow.nameEnAb">{{item.nameEnAb}}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    titleType: {
      type: String,
      default: 'nameCh'
    },
    selectTime: Object
  },
  computed: {
    dateList() {
      const monthDayNum = moment(this.selectMonth).daysInMonth()
      const lastMonthDayNum = moment(this.selectMonth)
        .subtract(1, 'month')
        .daysInMonth()
      const firstDayOnWeek =
        moment(this.selectMonth)
          .date(1)
          .weekday() + 1
      let list = []
      let firstRow = []
      for (let i = 0; i < 7; i++) {
        if (firstDayOnWeek === i) firstRow[i] = 1
        else if (i < firstDayOnWeek) {
          firstRow[i] = lastMonthDayNum + i - firstDayOnWeek + 1
        } else firstRow[i] = i - firstDayOnWeek + 1
      }
      list.push(firstRow)
      let num = firstRow[6]
      for (let i = 0; i < (monthDayNum - firstRow[6]) % 7; i++) {
        let listRow = []
        for (let k = 0; k < 7; k++) {
          listRow[k] = ++num
        }
        list.push(listRow)
      }
      return list
    },
    selectMonth() {
      return `${this.selectTime.year}-${
        this.selectTime.month < 10
          ? '0' + this.selectTime.month
          : this.selectTime.month
      }`
    }
  },
  data() {
    return {
      weekList: [
        {
          nameCh: '日',
          nameEn: 'Sunday',
          nameEnAb: 'SUN',
          key: 0
        },
        {
          nameCh: '一',
          nameEn: 'Monday',
          nameEnAb: 'MON',
          key: 1
        },
        {
          nameCh: '二',
          nameEn: 'Tuesday',
          nameEnAb: 'TUE',
          key: 2
        },
        {
          nameCh: '三',
          nameEn: 'Wednesday',
          nameEnAb: 'WED',
          key: 3
        },
        {
          nameCh: '四',
          nameEn: 'Thursday',
          nameEnAb: 'THU',
          key: 4
        },
        {
          nameCh: '五',
          nameEn: 'Friday',
          nameEnAb: 'FRI',
          key: 5
        },
        {
          nameCh: '六',
          nameEn: 'Saturday',
          nameEnAb: 'SAT',
          key: 6
        }
      ],
      list: [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
      ]
    }
  },
  methods: {
    init() {
      // console.log(
      //   moment(
      //     `${this.selectTime.year}-${this.selectTime.month}`
      //   ).daysInMonth(),
      //   new Date('2019').getTime()
      // )
    }
  }
}
</script>
<style lang="scss" scoped>
.calendar {
  &__body {
    height: 300px;
  }
  &__top {
    display: flex;
    border-bottom: 1px solid #ebeef5;
    align-items: center;
    justify-content: space-around;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
    }
  }
  &__table {
    table-layout: fixed;
    width: 100%;
    font-size: 12px;
    &-title {
      padding: 5px;
      color: #606266;
      font-weight: 400;
      border-bottom: solid 1px #ebeef5;
    }
  }
}
</style>
