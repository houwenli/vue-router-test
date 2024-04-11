import Vue from 'vue'
import VueRouter from './myRouter'
import App from './App.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

import { routes } from './router'

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
