export default {
  methods: {
    reFindYcChanegUser(area) {
      this.$callApi({
        api: 'forecast/changeUser/' + area,
        param: {},
        axiosOptions: {
          baseURL: '/jyjhyc/action/'
        },
        isShowError: false
      })
    }
  }
}
