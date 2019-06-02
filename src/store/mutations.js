import Vue from 'vue';
// 直接更新state的数据
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESULT_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutations-types';
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops;
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESULT_USER_INFO](state) {
    state.userInfo = {};
  },
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods;
  },
  [RECEIVE_INFO](state, { info }) {
    state.info = info;
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings;
  },
  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      // 第一次点
      // food.count = 1;
      Vue.set(food, 'count', 1); // 让新增的值也有数据绑定
      state.cartFoods.push(food); // 将food添加到cartFoods中
    } else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      food.count--; // 如果有值才--
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },

  // 清空购物车
  [CLEAR_CART](state) {
    // 清空food中的count
    state.cartFoods.forEach(food => {
      food.count = 0;
    });
    state.cartFoods = []; // 数组被别的数组引用, 数组中的对象没有清空
  },
  [RECEIVE_SEARCH_SHOPS](state, { searchShops }) {
    state.searchShops = searchShops;
  }
};
