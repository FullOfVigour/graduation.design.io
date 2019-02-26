<template>
  <!-- <div class="login-wrap">
    <el-card class="box-card">
      <div slot="header"
        class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0"
          type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4"
        :key="o"
        class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div> -->
  <div class="login-wrap">
    <div class="login__title">
      <img class="login__img"
        src="../../assets/logo.png">综合实践管理平台</div>
    <div class="login__main">

      <div class="login__body">
        <div class="login__mask"></div>
        <div class="login__form">
          <el-form ref="form"
            :model="form"
            :rules="rules">
            <el-form-item prop="username"
              class="login-username">
              <el-input v-model="form.username"
                placeholder="请输入用户名"
                @keyup.enter.native="reLogin">
                <template slot="prepend">
                  <div class="username-input"></div>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password"
              class="login-password">
              <el-input type="password"
                v-model="form.password"
                placeholder="请输入密码"
                @keyup.enter.native="reLogin">
                <template slot="prepend">
                  <div class="password-input"></div>
                </template>
              </el-input>
            </el-form-item>
            <div class="login-check">
              <input type="text"
                class="check-itme"
                placeholder="请输入验证码">
              <span class="check-itme"></span>
            </div>
            <div class="login-btn">
              <el-button type="primary"
                @click="reLogin">
                登录
              </el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { setSSID, clearSSID } from '../../storage/cookie.js'
import { setBaseData } from '../../storage/localStorage.js'
import { SET_IS_FROM_LOGIN } from '../../store/mutation-types'

export default {
  name: 'login',
  computed: {
    ...mapState(['companyName'])
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapActions(['initApp']),
    ...mapMutations([SET_IS_FROM_LOGIN]),
    // 页面登入,当表单校验成功时调用后台登入接口,并在接口成功之后将返回的 token 存入 cookie中
    reLogin() {
      let api = 'server_base_login'
      let param = {}
      param.loginName = this.form.username
      param.password = this.form.password
      this.$refs.form.validate(valid => {
        if (valid) {
          clearSSID()
          this.$callApi({
            api,
            param
          }).then(data => {
            setSSID(data.token).then(() => {
              setBaseData(data)
              this.$refs.form.resetFields()
              this.SET_IS_FROM_LOGIN(true)
              this.initApp(data)
              this.$router.push({ name: 'main' })
            })
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  background: #f7fcff;
}
.login__title {
  height: 20%;
  display: flex;
  align-items: flex-end;
  font-size: 30px;
  width: 1000px;
  // padding: 35px 0 35px 24px;
  margin: 0 auto;
  color: #2c5590;
}
.login__img {
  width: 45%;
  margin-right: 10px;
}

.login__main {
  width: 100%;
  height: 402px;
  background: linear-gradient(#1f93e2, #d5e8f9);
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
}

.login__body {
  width: 1024px;
  height: auto;
  position: relative;
  margin: 0 auto;
}

.login__mask {
  background: url(./zjlll-login-mask-bg.png) no-repeat;
  width: 411px;
  height: 258px;
  position: absolute;
  right: 0;
  bottom: -485px;
  z-index: 1;
}

.login__form {
  position: absolute;
  right: 48px;
  bottom: -485px;
  width: 250px;
  padding: 50px 32px 70px;
  box-shadow: 0 1px 2px #d4d8db;
  border-radius: 5px;
  background: #fff;
  z-index: 2;
}

.login-username {
  margin-top: 18px;
}

.username-input {
  width: 20px;
  height: 20px;
  background: url(./icon/input-user-icon.png) no-repeat;
}

.password-input {
  width: 20px;
  height: 20px;
  background: url(./icon/input-password-icon.png) no-repeat;
}
.login-check {
  margin-bottom: 22px;
  display: none;
  align-items: center;
  justify-content: space-between;
  .check-itme {
    width: 118px;
    height: 34px;
    border: 1px solid #d3dce6;
    border-radius: 5px;
    text-align: center;
  }
  input {
    padding: 0;
    margin: 0;
  }
  span {
    overflow: hidden;
  }
}

.login-btn {
  text-align: center;
  button {
    width: 100%;
    height: 36px;
    font-size: 14px;
    color: #fff;
    border: 1px solid #ffb100;
    background: #ffb100;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }
}
</style>
