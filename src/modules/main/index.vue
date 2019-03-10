<template>
  <div>
    <top-bar></top-bar>
    <div style="margin:20px;">
      <calendar :data="list"></calendar>
    </div>
    <!-- <el-date-picker v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker> -->
    <testa @change="onChange"></testa>
  </div>
</template>

<script>
import topBar from '../../components/topBar'
import calendar from '../../components/calendar'
import testa from './a'
import { mapActions } from 'vuex'
import { getBaseData } from '../../storage/localStorage'
export default {
  components: {
    topBar,
    calendar,
    testa
  },
  created() {
    this.initApp(getBaseData()).then(() => {})
  },
  data() {
    return { value1: '', list: [] }
  },
  methods: {
    ...mapActions(['initApp']),
    onChange(list) {
      this.list = list
    }
  }
}
</script>

<style>
</style>
