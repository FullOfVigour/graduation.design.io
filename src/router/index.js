import define from './define'
import Router from 'vue-router'

const { login, main } = define

const router = {
  routes: [login, main]
}
export default new Router(router)
