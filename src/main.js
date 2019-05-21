import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

// 加载mockserver
import './mock/mockServer';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用路由
  store // 使用vuex
});
