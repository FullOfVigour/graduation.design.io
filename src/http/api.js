import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import router from '../router/index'
import { randomString } from '../utils/random'
import { get } from '../utils/cookie'
import { Base64 } from 'js-base64'
import store from '../store/entrance/main'
import { setAccessToken } from '../storage/cookie'
axios.defaults.baseURL = `${window.location.origin}/api/`
// axios.defaults.baseURL = 'http://47.99.209.111:8021/api/'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.timeout = 50000

const vue = new Vue()

const callApi = ({
  api,
  param,
  readonly = true,
  axiosOptions = {},
  error = '调用接口失败',
  success = '',
  async = false,
  mock = false,
  isShowError = true
}) => {
  const csrfToken = Base64.encode(
    new Date().valueOf() + 'main' + randomString() + api
  )
  let token = get('access_token')
  axiosOptions = Object.assign(axiosOptions, {
    headers: {
      'X-CSRF-TOKEN': csrfToken,
      accessToken: token
    }
  })

  if (param.userid === undefined) param.userid = store.state.userid

  param.accessToken = token

  const axios = create(axiosOptions)
  // Content-Type 包含 application/x-www-form-urlencoded;，
  // 必须使用 URLSearchParams 进行参数的序列化
  // https://github.com/mzabriskie/axios#using-applicationx-www-form-urlencoded-format
  // URLSearchParams 只有某些版本的浏览器支持
  // https://caniuse.com/#search=URLSearchParams
  // 当前时间戳+main+随机数
  // const csrfToken = Base64.encode(
  //   new Date().valueOf() + 'main' + randomString() + api
  // )

  // const params = qs.stringify({
  //   apiparams: JSON.stringify({ params: param, readonly, async })
  // })

  const params = JSON.stringify({ params: param, readonly, async })

  // const params = new URLSearchParams()
  // params.append('apiparams', JSON.stringify())
  return axios
    .post(api, params)
    .then(({ data: { data, error: { code, mess } } }) => {
      if (code !== '200') {
        // 登入信息失效
        if (code === '505') {
          console.log(vue, router.push)
          router.push('/login')
        }
        return Promise.reject(new Error(JSON.stringify(mess)))
      }
      if (success) {
        vue.$message.success(success)
      }
      // 更新cookie
      if (data.token) {
        setAccessToken(data.token)
      }

      return data
    })
    .catch(error => {
      isShowError && vue.$message.error(`${error.message}`)
      console.log(`
        ${'*'.repeat(24)}  api = ${api}  ${'*'.repeat(24)}

        params = ${JSON.stringify(param, null, 2)}

        code = ${error.code} 

        errorMessage = ${error.message}

        ${'#'.repeat(70)}
      `)
      // 统一处理错误然后再抛出错误，供调用者处理
      return Promise.reject(error)
    })
}

const create = (options = {}) => {
  return axios.create(options)
}

export default callApi
