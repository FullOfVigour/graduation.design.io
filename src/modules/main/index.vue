<template>
  <div>
    <!-- <top-bar></top-bar> -->
    <div style="margin:20px;">
      <calendar></calendar>
    </div>
    <testa></testa>
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
    return {}
  },
  methods: {
    ...mapActions(['initApp'])
  }
}
</script>

<style>
</style>
