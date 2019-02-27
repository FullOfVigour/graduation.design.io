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
          <td v-for="child in item"
            :key="child.timeStamp"
            class="table__td">
            <div class="table__div">
              <span class="table__span table__span-date">{{child.day}}</span>
              <span class="table__span table__span-remark">{{getRemark(child.timeStamp)}}</span>
            </div>
          </td>
        </tr>

      </tbody>
    </table>
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
    selectTime: Object,
    data: Array
  },
  computed: {
    dateList() {
      const monthDayNum = moment(this.selectMonth).daysInMonth() // 当前月总天数
      const firstDayOnWeek =
        moment(this.selectMonth)
          .date(1)
          .weekday() + 1
      let list = []
      let rowData = []

      let allDays = monthDayNum + firstDayOnWeek
      let allRows = parseInt(allDays / 7) + (allDays % 7 === 0 ? 0 : 1)
      for (let i = 0; i < allRows * 7 + 1; i++) {
        const day = firstDayOnWeek - i
        if (i % 7 === 0 && i !== 0) {
          list.push(rowData)
          rowData = []
        }
        rowData[i % 7] = {
          day: moment(this.selectMonth)
            .subtract(day, 'day')
            .date(),
          timeStamp: moment(this.selectMonth)
            .subtract(day, 'day')
            .valueOf(),
          k: moment(this.selectMonth)
            .subtract(day, 'day')
            .format('YYYY-MM-DD')
        }
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
    },
    getRemark(timeStamp) {
      // console.log(
      //   moment(timeStamp).format('YYYY-MM-DD'),
      //   timeStamp,
      //   this.data.length
      // )

      for (let i in this.data) {
        let item = this.data[i]
        if (item.stateDate <= timeStamp && timeStamp <= item.endDate) {
          console.log('a', item.type === '1' ? '工作' : '休息')
          return item.type === '1' ? '工作' : '休息'
        }
      }
      this.data.forEach(item => {
        if (item.stateDate) {
          // console.log(
          //   '--------------------------------------------\n',
          //   moment(item.stateDate).format('YYYY-MM-DD'),
          //   item.stateDate,
          //   '\n',
          //   moment(timeStamp).format('YYYY-MM-DD'),
          //   timeStamp,
          //   '\n',
          //   moment(item.endDate).format('YYYY-MM-DD'),
          //   item.endDate,
          //   '\n',
          //   '\n--------------------------------------------'
          // )
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.calendar {
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
    .table {
      &__td {
        height: 80px;
        padding: 4px 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        position: relative;
      }
      &__div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // flex-wrap: wrap;
        width: 100%;
        height: 100%;
        &:hover {
          color: #409eff;
          // font-weight: 700;
          // font-size: 20px;
        }
      }
      &__span {
        &-date {
          font-size: 16px;
        }
        &-remark {
          color: #ccc;
        }
        // position: absolute;
      }
    }
  }
}
</style>
