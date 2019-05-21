// 路由对象模块
import Vue from 'vue';
import VueRouter from 'vue-router';

import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Login from '../pages/Login/Login.vue';
import Shop from '../pages/Shop/Shop.vue';
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue';
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue';
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue';

// 声明插件
Vue.use(VueRouter);

// 配置路由项
export default new VueRouter({
  // 所有路由
  routes: [
    { path: '/', redirect: '/msite' },
    {
      path: '/msite',
      component: Msite,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        FooterShow: true
      }
    },
    { path: '/login', component: Login },
    {
      path: '/shop',
      component: Shop,
      children: [
        { path: '', redirect: '/shop/goods' },
        { path: '/shop/goods', component: ShopGoods },
        { path: '/shop/info', component: ShopInfo },
        { path: '/shop/ratings', component: ShopRatings }
      ]
    }
  ]
});
