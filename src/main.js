import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用路由
  store // 使用vuex
})
