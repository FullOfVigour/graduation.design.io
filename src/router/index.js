import define from './define'
import Router from 'vue-router'

const { login, main, redirect } = define

const router = {
  routes: [login, main, redirect]
}
export default new Router(router)
