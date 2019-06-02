import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button } from 'mint-ui';
import VueLazyload from 'vue-lazyload';

// 加载mockserver
import './mock/mockServer';
import loading from './common/imgs/loading.gif';
import './filters/index'; //加载模块
// 注册全局组件
Vue.component(Button.name, Button);
Vue.use(VueLazyload, {
  // 内部定义一个指定lazy
  loading
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用路由
  store // 使用vuex
});
