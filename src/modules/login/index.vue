<template>
  <div class="login">
    <div class="login__after"></div>
    <transition appear
      name="rotate">
      <div class="login__main"
        v-show="isShow">
        <img class="login__logo"
          src="../../assets/img/logo.png">
        <div class="login__body">
          <div class="login__form">
            <el-form ref="form"
              :model="form"
              :rules="rules">
              <el-form-item prop="username"
                class="login-username">
                <el-input v-model="form.username"
                  placeholder="请输入用户名"
                  @keyup.enter.native="reLogin">
                </el-input>
              </el-form-item>
              <el-form-item prop="password"
                class="login-password">
                <el-input type="password"
                  v-model="form.password"
                  placeholder="请输入密码"
                  @keyup.enter.native="reLogin">
                </el-input>
              </el-form-item>
              <!-- <el-form-item prop="type">
                <el-radio-group v-model="form.userType"
                  class="login__radio-group">
                  <el-radio label="student">学生
                  </el-radio>
                  <el-radio label="teacher">教师
                  </el-radio>
                </el-radio-group>
              </el-form-item> -->

              <!-- <el-form-item prop="verification">
                <div class="login-verification">
                  <el-input class="login-verification__input"
                    v-model="form.verification"
                    placeholder="请输入验证码"
                    maxlength="4"
                    @keyup.enter.native="reLogin"></el-input>
                  <verification-code class="login-verification__code"
                    @change="onCodeChange"></verification-code>
                </div>
              </el-form-item> -->

              <el-button type="primary"
                @click="reLogin"
                class="login-btn">
                登录
              </el-button>
            </el-form>
          </div>
        </div>
      </div>
    </transition>
    <vue-particles v-if="isShow"
      class="login__particles"
      color="#aaa"
      linesColor="#fff"
      hoverMode="grab"
      clickMode="push"
      :particlesNumber="30"
      :linesWidth="2">
    </vue-particles>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { setSSID, clearSSID } from '../../storage/cookie.js'
import { setBaseData } from '../../storage/localStorage.js'
import { SET_IS_FROM_LOGIN } from '../../store/mutation-types'
// import verificationCode from '../../components/verificationCode'
export default {
  name: 'login',
  props: {
    isShow: Boolean
  },
  components: {
    // verificationCode
  },
  mounted() {
    // console.log(this.$router)
  },
  computed: {
    ...mapState(['companyName'])
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
        userType: 'student',
        verification: ''
      },
      verification: '',
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        verification: [{ validator: this.verificationRule, trigger: 'blur' }]
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
    },
    verificationRule(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value.toUpperCase() !== this.verification.toUpperCase()) {
        callback(new Error('验证码错误!'))
      } else {
        callback()
      }
    },
    onCodeChange(str) {
      this.verification = str
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.fullPath === '/main') {
      next(vm => {
        vm.$router.push({ name: from.name })
      })
      return
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #f7fcff;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    rgba(19, 36, 82, 0.8) 10%,
    rgba(115, 83, 63, 0.8) 90%
  );
  &__after {
    position: absolute;
    filter: blur(6.5px);
    // content: '';
    background: url('../../assets/login/login-bg-01.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: scale(1.1);
    opacity: 0.9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    motion: auto;
    z-index: 0;
  }
  &__particles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  &__main {
    position: absolute;
    z-index: 2;
    box-sizing: border-box;
    width: 370px;
    // height: 377px;
    border-radius: 6px;
    // background-color: rgba(123, 123, 123, 0.6);
    top: 23%;
    right: 18%;
    padding: 10px;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.6),
      rgba(123, 123, 123, 0.6)
    );
  }
  &__logo {
    width: 100%;
  }
  &__body {
    padding: 5px 10px;
  }
  &__radio-group {
    display: flex;
    justify-content: space-around;
    .radio-group__label {
      color: #ff0;
    }
  }
  &-verification {
    display: flex;
    align-items: flex-end;
    &__input {
      margin-right: 20px;
    }
  }
  &-btn {
    width: 100%;
  }
}

.custom-appear-class {
  font-size: 40px;
  color: red;
  background: green;
}

.custom-appear-active-class {
  background: green;
}
</style>
