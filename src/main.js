// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Mint from 'mint-ui'
import router from './router'
import VueOccupy from 'vue-occupy'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import store from './store'
import App from './app'
import './mock'

Vue.use(VueOccupy)
Vue.use(ElementUI)
Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
})
