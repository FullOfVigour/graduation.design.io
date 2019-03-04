<template>
  <div>
    <el-button type="primary"
      @click="onCreateClick">添加</el-button>
    <div>
      <el-table :data="tableData"
        border>
        <el-table-column prop="stateDate"
          align="center"
          label="开始日期"
          min-width="180">
          <template slot-scope="scoped">
            <span>{{getDateString(scoped.row.stateDate)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="endDate"
          align="center"
          label="结束日期"
          min-width="180">
          <template slot-scope="scoped">
            <span>{{getDateString(scoped.row.endDate)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type"
          align="center"
          label=" 类型"
          min-width="180">
          <template slot-scope="scoped">
            <span>{{scoped.row.type === '1'?'工作':'休息'}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog title="新增"
        width="400px"
        :visible.sync="isDialogVisible"
        :before-close="onBeforeClose">
        <div>
          <div>
            <el-date-picker v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>

          <div style="margin-top: 20px;">
            <el-radio v-model="radio"
              label="1">工作</el-radio>
            <el-radio v-model="radio"
              label="2">休息</el-radio>
          </div>
        </div>
        <div slot="footer">
          <el-button @click="onCloseClick">取 消</el-button>
          <el-button type="primary"
            :disabled="isDisabled"
            @click="onConfirmClick">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      time: '',
      tableData: [],
      isDialogVisible: false,
      radio: '1',

      pickerOptions: {
        disabledDate: this.disabledDate
      }
    }
  },
  computed: {
    isDisabled() {
      // 控制确定按钮是否可以点击,只有当选择好日期之后才能点击
      return this.time.length !== 2
    }
  },
  mounted() {
    // this.reFind()
    this.tableData.push()
  },
  methods: {
    // reFind() {
    //   this.$callApi({
    //     api: 'server_consult_listConsult',
    //     param: {}
    //   }).then(data => {})
    // },

    // 被禁用的时间
    disabledDate(time) {
      return (
        this.tableData.filter(item => {
          return (
            item.stateDate <= time.getTime() && time.getTime() <= item.endDate
          )
        }).length !== 0
      )
    },

    // 初始化 dialog 数据
    initData() {
      this.time = []
      this.radio = '1'
    },

    // 新增记录
    onCreateClick() {
      this.initData()
      this.isDialogVisible = true
    },
    // 取消新增
    onCloseClick() {
      this.initData()
      this.isDialogVisible = false
    },
    // 确定新增
    onConfirmClick() {
      this.isDialogVisible = false
      this.tableData.push({
        stateDate: moment(this.time[0]).format('YYYY-MM-DD'),
        endDate: this.time[1].getTime(),
        type: this.radio
      })
    },

    // 关闭前回调
    onBeforeClose() {
      this.isDialogVisible = false
      this.initData()
    },

    getDateString(time) {
      return moment(time).format('YYYY-MM-DD')
    }
  },
  watch: {
    tableData() {
      this.$emit('change', this.tableData)
    }
  }
}
</script>

<style >
</style>
